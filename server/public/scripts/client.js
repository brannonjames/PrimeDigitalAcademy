const app = angular.module('ListingsApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      template: '<add-listing></add-listing>'
    })
    .when('/rent', {
      template: '<listings-list></listings-list>'
    })
    .when('/buy', {
      template: '<listings-list></listings-list>'
    })
    .otherwise({
      redirectTo: '/'
    });
})