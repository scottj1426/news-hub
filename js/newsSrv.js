angular.module('newsHub').service("newsSrv", function($http){
  var self = this
   var baseUrl = 'https://newsapi.org/v1/articles?source='
   var key = '&apiKey=bf1e20fd433f4c219a8fb80ae3ef6775';

this.getSources = function(selected){

  var arr = [];
  return $http.get('https://newsapi.org/v1/sources?category=&sortyby=latest').then(function(response){

      // console.log("all data:", response.data.sources);
      for( var i = 0; i < response.data.sources.length; i++){
        for(var j = 0; j < selected.length; j++){
          // console.log('j', response.data.sources[i].category)
          if (selected[j] === response.data.sources[i].category){
            console.log(response.data.sources[i]);
            arr.push(response.data.sources[i])
          }
        }
      }
      return arr;
    })  





    //  console.log(self.sources.filter(function(cur){
    //    return selected.includes(cur.category)
    //  }));

    //  var promises = [];
    //  sources.forEach(function(cur){
    //
    //    promises.push($http.get(baseUrl + "=" + cur.id + key))
    //  })
    //  return Promise.all(promises).then(function(response){
    //    return response;
    //  })
   }
   this.getAll = function(){
     return $http.get('https://newsapi.org/v1/sources?category=&sortyby=latest')
   }
   this.getAll().then(function(res){
     console.log(res);
     self.sources = res.data.sources
    //  console.log(res.data.sources.map(function(cur){
    //    return cur.category
    //  }).filter(function(cur, ind, arr){
    //    return arr.indexOf(cur) === ind
    //  }));
   })
})
