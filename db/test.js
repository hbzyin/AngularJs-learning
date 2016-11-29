/**
 * Created by Administrator on 2016/11/30.
 */

var app = angular.module('myApp', []);
app.controller('sitesCtrl', function($scope, $http) {
  $http.get("sites.php").then(function (response) {
    $scope.names = response.data.records;
  });
});