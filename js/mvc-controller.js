/**
 * Created by Administrator on 2016/6/24.
 */
//1、正确方法：指令复用
/*
 var app=angular.module("mvc",["ng"]);
 app.directive("t",function(){})
 */
//2、不恰当方式：控制器嵌套
var app=angular.module("mvc",["ng"]);
app.controller("parentCtr",function($scope){
  $scope.t=function(){
    alert("通用控制器");
  }
})
.controller("Ctr1",function($scope){
      $scope.num=1;
      $scope.test1=function(){
        alert("控制器 1");
      }
    })
.controller("Ctr2",function($scope){
      $scope.num=2;
      $scope.test2=function() {
        alert("控制器 2");
      }
 })
