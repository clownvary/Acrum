/**
 * Created by clownvary on 2015/9/11.
 * Email vary_007@163.com
 *
 */

angular.module('router', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider','$locationProvider', function ($stateProvider, $urlRouterProvider,$locationProvider) {

        //$urlRouterProvider.otherwise('/error');//定义错误路由

        $stateProvider
            .state('home', {
                url: '^/',//url在外层配置，不是在views里面
                views: {
                    'headbar': {
                        templateUrl: 'headbar.tpl.html'
                    }
                },
                data:{nickname:'首页',master:"home"}

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
                },
                data:{nickname:'项目',master:'home'}
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

                },
                data:{nickname:'管理',master:'home'}

            })
            .state('admin.project', {
                url: '/projectn',
                views: {
                    'admin.content@admin': {
                        templateUrl: './admin/project/admin.project.tpl.html'

                    }
                },
                data:{nickname:'工程',master:'admin'}
            })
            .state('admin.user', {
                url: '/usern',
                views: {
                    'admin.content@admin': {
                        templateUrl: './admin/user/admin.user.tpl.html'

                    }
                },
                data:{nickname:'用户',master:'admin'}
            });
        $locationProvider.html5Mode(true);

    }]);
