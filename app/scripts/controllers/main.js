'use strict';

/**
 * @ngdoc function
 * @name phoenixApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phoenixApp
 */
angular.module('phoenixApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
