angular.module('helloworld').controller('searchController', ['$state',  function($state) {

  const ctrl = this;

  ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    // $state.go('search.users', { dataType, data });
    $state.go('search.users', { dataType, data });
    // $http({
    //   method: 'GET',
    //   url: `https://api.github.com/search/${dataType}?q=${data}&per_page=10`
    // }).then((response) => {
    //     ctrl.recievedData[dataType] = response.data.items;
    //     console.log(ctrl.recievedData);
    //   }, (error) => {
    //     console.log(error);
    //   });
    // };

    // ctrl.findData($stateParams.dataType)($stateParams.data);
  
  }

}]);