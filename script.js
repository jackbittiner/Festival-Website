var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })

    // routes for the about pages
    .when('/about/the-idea', {
      templateUrl : 'pages/about/the-idea.html',
      controller  : 'theIdeaController'
    })

    .when('/about/previous-years', {
      templateUrl : 'pages/about/previous-years.html',
      controller  : 'previousYearsController'
    })

    .when('/about/the-team', {
      templateUrl : 'pages/about/the-team.html',
      controller  : 'theTeamController'
    })

    // route for the 2017 pages
    .when('/2017/theme', {
      templateUrl : 'pages/2017/theme.html',
      controller  : 'themeController'
    })

    .when('/2017/host', {
      templateUrl : 'pages/2017/host.html',
      controller  : 'hostController'
    })

    .when('/2017/artists', {
      templateUrl : 'pages/2017/artists.html',
      controller  : 'artistController'
    })

    .when('/2017/schedule', {
      templateUrl : 'pages/2017/schedule.html',
      controller  : 'scheduleController'
    })

    // route for the opportunities
    .when('/opportunities', {
      templateUrl : 'pages/opportunities.html',
      controller  : 'opportunitiesController'
    });

});


scotchApp.controller('mainController', function($scope) {
  $scope.message = 'This is the home page!';
});

scotchApp.controller('theIdeaController', function($scope) {
  $scope.message = 'This will showcase the idea!';
});

scotchApp.controller('previousYearsController', function($scope) {
  $scope.message = 'This will show what happened previous years!';
});

scotchApp.controller('theTeamController', function($scope) {
  $scope.message = 'This will show Ruta!';
});

scotchApp.controller('themeController', function($scope) {
  $scope.message = 'This is the theme!';
});

scotchApp.controller('hostController', function($scope) {
  $scope.message = 'This is the host!';
});

scotchApp.controller('artistController', function($scope) {
  $scope.message = 'These are the artists!';
});

scotchApp.controller('scheduleController', function($scope) {
  $scope.message = 'This is the schedule!';
});

scotchApp.controller('opportunitiesController', function($scope) {
  $scope.message = 'Look at these lovely opportunities!';
});
