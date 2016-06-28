import angular from 'angular';

export default angular

.module('app', [])

.controller('AppController', function ($scope) {
  $scope.world = 'world';
});
