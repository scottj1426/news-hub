angular.module("newsHub").controller('newsCtrl', function($scope, newsSrv){
  $scope.test ="No Server";

 //bring in caetgories from API ,business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology.

$scope.choices = [];

$scope.selectedChoices = [];

$scope.toggleCategory = function(category){
  if ($scope.selectedChoices.includes(category)){
    $scope.selectedChoices = $scope.selectedChoices.filter(function(cur){
      console.log(cur == category);
      return cur !== category
    })
  } else {
    $scope.selectedChoices.push(category)
  }
  // console.log($scope.selectedChoices);
}
$scope.showAllResources = function(){
  newsSrv.getSources($scope.selectedChoices).then(response => {
    console.log(response)
  })
}
})
