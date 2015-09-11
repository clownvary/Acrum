/**
 * Created by clownvary on 2015/9/11.
 * Email vary_007@163.com
 *
 */

'use strict';

var routerApp = angular.module('routerApp', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/error');//定义错误路由

    $stateProvider
        // nested list with just some random string data
        .state('paragraph', {
            url: '^/paragraph',
            template: '<p>I could sure use a scoop of ice-cream.</p> '
        })



}]);
