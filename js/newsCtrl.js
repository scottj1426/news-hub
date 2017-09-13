angular.module("newsHub").controller('newsCtrl', function($scope, newsSrv){
  $scope.test ="No Server";

 //bring in caetgories from API ,business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology.

$scope.choices = [];
 $scope.addTo = function (pick){
   if($scope.choices.includes(pick)){
     $scope.choices = $scope.choices.filter(function(){
       return cur.category !== choice.category
     })
   }
   else{
     $scope.choices.push(pick)
   }
 }
})
