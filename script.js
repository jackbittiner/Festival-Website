// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
      controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    })

    .when('/gallery', {
      templateUrl : 'pages/gallery.html',
      controller  : 'galleryController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
  // create a message to display in our view
  $scope.message = 'This is the home page!';
});

scotchApp.controller('aboutController', function($scope) {
  $scope.message = 'This is the about page!';
});

scotchApp.controller('contactController', function($scope) {
  $scope.message = 'This is the contact page!';
});

scotchApp.controller('galleryController', function($scope) {
  $scope.message = 'This is the gallery page!';
});