
define(function(){
    angular.module('myApp.routes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.
          when('/', {
            templateUrl: 'partials/posts/index',
          }).
          when('/users/login', {
            templateUrl: '/partials/users/login',
            controller: 'LoginCtrl'
          }).
          when('/:type/create', {
            template: '<ng-include src="getTemplate()" />',
            controller: 'AddCtrl'
          }).
          when('/:type/:id', {
            template: '<ng-include src="getTemplate()" />',
            controller: 'ReadCtrl'
          }).
          when('/:type/edit/:id', {
            template: '<ng-include src="getTemplate()" />',
            controller: 'EditCtrl'
          }).
          when('/:type/delete/:id', {
            template: '<ng-include src="getTemplate()" />',
            controller: 'DeleteCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
  
        });
});


