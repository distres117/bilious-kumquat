'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {
      templateUrl: 'partials/posts/index',
    }).
    when('/users/login', {
      templateUrl: '/partials/users/login',
      controller: LoginCtrl
    }).
    when('/:type/create', {
      template: '<ng-include src="getTemplate()" />',
      controller: AddCtrl
    }).
    when('/:type/:id', {
      template: '<ng-include src="getTemplate()" />',
      controller: ReadCtrl
    }).
    when('/:type/edit/:id', {
      template: '<ng-include src="getTemplate()" />',
      controller: EditCtrl
    }).
    when('/:type/delete/:id', {
      template: '<ng-include src="getTemplate()" />',
      controller: DeleteCtrl/**/
    }).
    otherwise({
      redirectTo: '/'
    });

  
}).
controller('SessionCtrl', function ($scope, $rootScope, AuthService){
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

}).
controller('IndexCtrl', function($scope, $http, AuthService) {
  $http.get('/api/posts').
    success(function(data, status, headers, config) {
      $scope.data = data;
    });
})
