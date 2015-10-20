/**
 * Created by clownvary on 2015/10/20.
 * Email vary_007@163.com
 *
 */

angular.module('directive.modal', [])
    .directive('modal', ['$parse', function ($parse) {
        return {
            restrict: 'E',

            scope: {
                targetUrl: '=',
                id: '=',//modalid
                btn0Text: '=',
                btn1Text: '='
                //btn0Click: '&',
                //btn1Click: '&'
            },
            templateUrl: '/common/directive/modal.tpl.html',
            link: function (scope, ele, attr) {
                $(ele).find("[class='btn btn-default']").bind('click', function () {
                    console.log('0');
                });
                $(ele).find("[class='btn btn-primary']").bind('click', function () {
                    console.log("1");
                });
            }

        }
    }]);