'use strict';

/**
 * @ngdoc function
 * @name onlineFunctionsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onlineFunctionsApp
 */
angular.module('onlineFunctionsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
