/**
 * Created by clownvary on 2015/9/15.
 * Email vary_007@163.com
 *
 */

angular.module('service.breadcrumbs', ['ui.router'])
    .factory('bread', ['$rootScope', '$state', '$window', function ($rootScope, $stateProvider, $window) {
        var o = {};
        var breadStates = [];
        //每次打开页面会触发此事件
        $rootScope.$on('$viewContentLoaded', function () {
            o.getStateChain();
        });
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            o.getStateChain();
        });

        //获取状态链
        o.getStateChain = function () {
            var curState = {
                state: $stateProvider.$current.self.name,
                nickname: $stateProvider.$current.self.data.nickname,
                master: $stateProvider.$current.self.data.master
            };

            breadStates.length = 0;//清空
            breadStates.push(curState);
            states = $stateProvider.get();
            o.findMaster(curState, states, breadStates);
            breadStates = breadStates.reverse();
        }
        //(递归)寻找上级导航
        o.findMaster = function (ele, states, breads) {
            if (ele.state === ele.master) {
                var hasOne = false;
                breads.forEach(function (e) {
                    if (e.state === ele.state) {
                        hasOne = true;
                    }
                });
                if (!hasOne) {
                    breads.push(ele);
                }


            } else {
                // var cur = ele;
                var result = {};
                states.forEach(function (cur) {
                    if (cur.name === ele.master) {

                        result.state = cur.name;
                        result.nickname = cur.data.nickname;
                        result.master = cur.data.master;
                    }
                });
                breads.push(result);
                o.findMaster(result, states, breads)
            }


        }
        o.breads = breadStates;
        return o;
    }]);