angular.module('newsHub').service("newsSrv", function($http){

   var baseUrl = 'https://newsapi.org/v1/articles?source='
   var key = '&apiKey=bf1e20fd433f4c219a8fb80ae3ef6775';

   this.getSources = function(sources){
     var promises = [];
     sources.forEach(function(cur){
       promises.push($http.get(baseUrl + cur.id + key))
     })
     return Promise.all(promises).then(function(response){
       return response;
     })
   }
   this.getAll = function(){
     return $http.get('https://newsapi.org/v1/sources?category=&sortyby=latest')
   }

})
