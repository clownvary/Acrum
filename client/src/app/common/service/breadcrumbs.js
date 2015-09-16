/**
 * Created by clownvary on 2015/9/15.
 * Email vary_007@163.com
 *
 */

angular.module('service.breadcrumbs', ['ui.router'])
    .factory('bread', ['$rootScope', '$state', function ($rootScope, $stateProvider) {
        var o = {};
        var breadStates = [];//
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            var curState = {
                state: toState.name,
                nickname: toState.data.nickname,
                master: toState.data.master
            };
            var tempState = {};
            breadStates.length = 0;//清空\
            breadStates.push(curState);
            states = $stateProvider.get();
            o.findMaster(curState, states, breadStates);
            var xx = breadStates;


        });
        //寻找上级导航
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
                var cur = ele;
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
        return o;
    }]);