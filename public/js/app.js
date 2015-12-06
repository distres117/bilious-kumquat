'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]).
config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {
      templateUrl: 'partials/posts/index',
      controller: IndexCtrl
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
      controller: DeleteCtrl
    }).
    otherwise({
      redirectTo: '/'
    });

  
});
