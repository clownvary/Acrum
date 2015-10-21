/**
 * Created by clownvary on 2015/10/20.
 * Email vary_007@163.com
 *
 */

angular.module('directive.modal', [])
    .directive('modal', function () {
        return {
            restrict: 'E',
            replace:true,
            scope: {
                targetUrl: '@',
                id: '@',
                title:'@',
                btn0Text: '@',
                btn1Text: '@',
                btn0Click: '&',
                btn1Click: '&'
            },
            templateUrl: '/common/directive/modal.tpl.html',
            link: function (scope, ele, attr) {
              //  $(ele).find("[class='modal fade']").attr('id',scope.id);
                $(ele).find("[class*='btn btn-default']").bind('click', function () {
                    scope.btn0Click();
                });
                $(ele).find("[class*='btn btn-primary']").bind('click', function () {
                   scope.btn1Click();
                });
            }

        }
    });