'use strict';


// Declare app level module which depends on filters, and services
/*
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
*/
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ui','ui.bootstrap','ngGrid']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/login', {templateUrl: 'login.html', controller: LoginCtrl});
    $routeProvider.when('/main', {templateUrl: 'main.html', controller: MainCtrl});
    $routeProvider.otherwise({redirectTo: '/login'});
  }]);