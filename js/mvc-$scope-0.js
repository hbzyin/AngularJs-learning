/**
 * Created by Administrator on 2016/6/24.
 */
    /*
var app=angular.module("mvc",["ng"]);
app.controller("parentCtr",function($scope){
  $scope.parent="main controller name";
})
app.controller("Ctr1",function($scope){
  $scope.name="控制器 1";
})
app.controller("nameList",function($scope){
  $scope.names=["aye","Misko","Igor"];
})
 */
var app=angular.module("mvc",["ng"]);
app.controller("parentCtr",function($scope){
})
app.controller("Ctr1",function($scope,$rootScope){
  $scope.name="控制器 1";
  $rootScope.parent="main controller name";
})
app.controller("nameList",function($scope){
  $scope.names=["aye","Misko","Igor"];
})