

// Declare app level module which depends on filters, and services
require(['routes','services', 'controllers', 'directives', 'filters'],function(){
    angular.bootstrap(document, [
      'myApp.routes', 
    'myApp.services', 
    'myApp.routes',
    'myApp.controllers',
    'myApp.directives',
    'myApp.filters'
    ]);

});


