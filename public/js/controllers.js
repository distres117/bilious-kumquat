/*function IndexCtrl($scope, $http, AuthService) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.data = data;
    });
}*/
define(function(){
  angular.module('myApp.controllers', [])
  
  .controller('AddCtrl', function ($scope, $http, $location,$routeParams, AuthService) {
    $scope.form = {};
    $scope.submitPost = function () {
      $scope.form.username = AuthService.get();
      $http.post('/api/' + $routeParams.type + '/create', $scope.form).
        success(function(data) {
          $location.path('/');
        });
    };
    $scope.getTemplate = function(){
      return 'partials/' + $routeParams.type + '/create';
    };
  })

  .controller('ReadCtrl', function($scope, $http, $routeParams) {
    $http.get('/api/' + $routeParams.type + '/' + $routeParams.id).
      success(function(data) {
        $scope.data = data;
      });
      $scope.getTemplate = function(){
      return 'partials/' + $routeParams.type + '/read';
    };
  })
  
  .controller('EditCtrl', function($scope, $http, $location, $routeParams) {
    $scope.form = {};
    var type = $routeParams.type;
    $http.get('/api/' + type + '/' + $routeParams.id).
      success(function(data) {
        $scope.form = data;
      });
    $scope.getTemplate = function(){
      return 'partials/' + $routeParams.type + '/edit';
    };
  
    $scope.editClick = function () {
      $http.put('/api/' + $routeParams.type + '/' + $routeParams.id, $scope.form).
        success(function(data) {
          $location.url('/');
        });
    };
  })
  
  .controller('DeleteCtrl', function($scope, $http, $location, $routeParams) {
    var type = $routeParams.type;
    $http.get('/api/' + type + '/' + $routeParams.id).
      success(function(data) {
        $scope.data = data;
      });
    $scope.getTemplate = function(){
      return 'partials/' + type + '/delete';
    };
  
    $scope.deleteClick = function () {
      $http.delete('/api/' + type + '/' + $routeParams.id).
        success(function(data) {
          $location.url('/');
        });
    };
  
    $scope.home = function () {
      $location.url('/');
    };
  })
  
  .controller('LoginCtrl', function($scope, $rootScope, AuthService, $location){
    $scope.doLogin= function(){
      AuthService.set($scope.username, 
      function(user){
        $location.url('/');
        $scope.msg = user;
      },
      function(error){
        $scope.error = error.message;
      });

    };
  
  })

  .controller('SessionCtrl', function ($scope, $rootScope, AuthService){
    $rootScope.$on('loggedIn', function(event, args){
      $scope.msg = args;
      $rootScope.loggedIn = true;
      $scope.doLogOut = function(){
          AuthService.remove();
      };
    });
    $rootScope.$on('loggedOut', function(event, args){
      $rootScope.loggedIn = false;
    });
    AuthService.get();
  })
  
  .controller('IndexCtrl', function($scope, $http, AuthService) {
    $http.get('/api/posts').
      success(function(data, status, headers, config) {
        $scope.data = data;
      });
  })
  
  
  
});












