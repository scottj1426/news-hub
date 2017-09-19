angular
  .module("newsHub", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "./views/home.html",
        controller: "homeCtrl",
        resolve: {
          articles: function(newsSrv) {
            var selectedChoices = JSON.parse(
              localStorage.getItem("selectedChoices")
            );
            if (selectedChoices) {
              // console.log(selectedChoices);
              return newsSrv.getArticles(selectedChoices);
              // .then(function(response) {
              //   console.log("resolve", response);
              //   return response;
              // });
            }
          }
        }
      })
      .state("newsCat", {
        url: "/config",
        templateUrl: "./views/newsCat.html"
      })
      .state("news", {
        url: "/config2",
        templateUrl: "./views/news.html"
      })
      .state("settings", {
        url: "/settings",
        templateUrl: "./views/settings.html"
      });
  });
