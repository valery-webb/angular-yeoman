'use strict';

/**
 * @ngdoc function
 * @name angularYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYeomanApp
 */
angular.module('angularYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
