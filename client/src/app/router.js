/**
 * Created by clownvary on 2015/9/11.
 * Email vary_007@163.com
 *
 */

angular.module('router', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        //$urlRouterProvider.otherwise('/error');//定义错误路由

        $stateProvider
            .state('home', {
                url: '',//url在外层配置
                views: {
                    'headbar': {
                        templateUrl: 'headbar.tpl.html'
                    }
                }

            })
            .state('projects', {
                url: '^/projects',
                views: {
                    'headbar@': {
                        templateUrl: 'headbar.tpl.html'

                    },
                    'content@': {
                        templateUrl: './projects/content.tpl.html'

                    }
                }
            })
            .state('admin', {
                url: '^/admin',
                views: {
                    'headbar@': {
                        templateUrl: 'headbar.tpl.html'

                    },
                    'content@':{
                        templateUrl:'./admin/admin.tpl.html'
                    }

                }

            })
            .state('admin.project', {
                url: '/project',
                views: {
                    'admin.content@admin': {
                        templateUrl: './admin/project/admin.project.tpl.html'

                    }
                }
            })
            .state('admin.user', {
                url: '/user',
                views: {
                    'admin.content@admin': {
                        templateUrl: './admin/user/admin.user.tpl.html'

                    }
                }
            })
            // nested list with just some random string data
            .state('paragraph', {
                url: '^/paragraph',
                template: '<p>I could sure use a scoop of ice-creamss.</p> '
            });

    }]);
