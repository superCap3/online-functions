'use strict';

/**
 * @ngdoc function
 * @name onlineFunctionsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onlineFunctionsApp
 */
angular.module('onlineFunctionsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
