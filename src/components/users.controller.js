angular.module('helloworld').controller('usersController', ['$http', '$scope', '$state', '$stateParams',  function($http, $scope, $state, $stateParams) {

  (function() {
    console.log('already in usersController');
  })();

  const ctrl = this;

  ctrl.recievedData = {
  	users: [],
  	repositories: [],
  	issues: [],
  	code: []
  };

  ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    console.log($stateParams);
    $http({
      method: 'GET',
      url: `https://api.github.com/search/${dataType}?q=${data}&per_page=10`
    }).then((response) => {
        ctrl.recievedData[dataType] = response.data.items;
        console.log(ctrl.recievedData);
      }, (error) => {
        console.log(error);
      });
    };

    ctrl.findData($stateParams.dataType)($stateParams.data);

}]);

// https://api.github.com/search/users?q=leha

// More than 21 repos
// https://api.github.com/search/users?q=leha+repos:%3E21
