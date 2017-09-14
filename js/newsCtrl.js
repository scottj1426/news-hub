angular
  .module("newsHub")
  .controller("newsCtrl", function($scope, $state, newsSrv) {
    $scope.test = "No Server";

    //bring in caetgories from API ,business, entertainment, gaming, general, music, politics, science-and-nature, sport, technology.

    $scope.choices = [];

    $scope.selectedCategories = [];
    $scope.selectedChoices = [];

    $scope.toggleCategory = function(category) {
      if ($scope.selectedCategories.includes(category)) {
        $scope.selectedCategories = $scope.selectedCategories.filter(function(
          cur
        ) {
          // console.log(cur == category);
          return cur !== category;
        });
      } else {
        $scope.selectedCategories.push(category);
      }
      // console.log($scope.selectedChoices);
    };
    $scope.showAllResources = function() {
      newsSrv.getSources($scope.selectedCategories).then(response => {
        // console.log(response);
        $scope.data = response;
      });
    };
    $scope.addToSelected = function(choice) {
      if ($scope.selectedChoices.includes(choice)) {
        $scope.selectedChoices = $scope.selectedChoices.filter(function(cur) {
          return cur.id != choice.id;
        });
      } else {
        $scope.selectedChoices.push(choice);
      }
      // console.log($scope.selectedChoices);
    };
    $scope.storage = function() {
      // console.log("Storage");
      if ($scope.selectedChoices) {
        localStorage.setItem(
          "selectedChoices",
          JSON.stringify($scope.selectedChoices)
        );
        $state.go("home");
      }
    };
  });
