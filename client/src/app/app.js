/**
 * Created by clownvary on 2015/9/11.
 * Email:vary_007@163.com
 */
angular.module('app', ['router','service.breadcrumbs','directive.modal'])
    //即使bread服务里是一个绑定的事件，只要注入了服务，就会全局执行，相当于全局绑定

    .controller('home', ['$rootScope', '$scope', function ($rootScope, $scope) {
        $rootScope.title = 'welcome';
        $scope.content = 'from scope';
        $scope.curUser = {};
        $scope.curUser.isAdmin = true;

    }])
    .controller('HeaderCtrl', ['$scope', 'bread', function ($scope, _bread_) {
        $scope.breads = _bread_.breads;//面包屑导航
        $scope.login = function () {
            $("#sss").modal('show');

        }
        $scope.go=function()
        {
            alert('ok');
        }
    }]);
