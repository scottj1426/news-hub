// //index.html
//   <div ng-repeat="choice in allChoices">
//     <input type="checkbox" ng-click="addToSelected(choice)">
//     {{choice.name}}
//   </div>
//   <button ng-click="showMeThaChoices()">submit</button>
//
//   <button ng-click="getSources()">CLICK</button>


  //newsCtrl.js
  //
  // $scope.getSources = function(){
  //   newsSrv.getSources().then(
  //     function(response){
  //       console.log(response);
  //     }
  //   )
  // }
  $scope.selectedChoices = [];

  $scope.addToSelected = function(choice){
    if ($scope.selectedChoices.includes(choice)){
      $scope.selectedChoices = $scope.selectedChoices.filter(function(){
        return cur.name !== choice.name
      })
    }
    else{
      $scope.selectedChoices.push(choice)
    }
  }
  newsSrv.getAll().then(function(response){
    console.log(response.data.sources)
    $scope.allChoices = response.data.sources
  })
  $scope.showMeThaChoices = function(){
    newsSrv.getSources($scope.selectedChoices).then(function(response){
      console.log(response);
    })
  }
})


//newsSrv
this.getSources = function(sources){
  var promises = [];
  sources.forEach(function(cur){
    promises.push($http.get(baseUrl + cur.id + key))
  })
  return Promise.all(promises).then(function(response){
    return response;
  })
}
