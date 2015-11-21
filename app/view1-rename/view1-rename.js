'use strict';

angular.module('myApp.view1-rename', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1-rename', {
    templateUrl: 'view1-rename/view1-rename.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);