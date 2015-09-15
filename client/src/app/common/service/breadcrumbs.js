/**
 * Created by clownvary on 2015/9/15.
 * Email vary_007@163.com
 *
 */

angular.module('service.breadcrumbs', ['ui.router'])
    .factory('bread', ['$rootScope', function ($rootScope) {
        var o = {};
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log("to" + toState.name);
            console.log("from" + fromState.name);

        });
        return o;
    }]);