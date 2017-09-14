angular
  .module("newsHub")
  .controller("homeCtrl", function($scope, newsSrv, articles) {
    // var selectedChoices = JSON.parse(localStorage.getItem("selectedChoices"));
    // if (selectedChoices) {
    //   newsSrv.getArticles(selectedChoices).then(function(response) {
    //     $scope.articles = response;
    //   });
    // }
    console.log(articles);
    $scope.articles = articles;
  });
