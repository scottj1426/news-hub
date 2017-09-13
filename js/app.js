angular.module("newsHub", ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home',{
      url:'/home',
      templateUrl: "/views/home.html"
    })
    .state('config',{
      url:'/config',
      templateUrl: "/views/newsCat.html"
    })
    .state('config2',{
      url:'/config2',
      templateUrl: "/views/news.html"
    })
    .state('settings',{
      url:'/settings',
      templateUrl: "/views/settings.html"
    })

});
