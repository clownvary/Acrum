/**
 * Created by clownvary on 2015/9/11.
 * Email:vary_007@163.com
 */
angular.module('app', ['router','service.breadcrumbs'])
    //即使bread服务里是一个绑定的事件，只要注入了服务，就会全局执行，相当于全局绑定

    .controller('home', ['$rootScope', '$scope','bread', function ($rootScope, $scope,_bread_) {
        $rootScope.title = 'welcome';
        $scope.content = 'from scope';
        $scope.curUser={};
        $scope.curUser.isAdmin=true;

    }]);
