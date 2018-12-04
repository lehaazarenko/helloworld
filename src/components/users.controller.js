angular.module('helloworld').controller('usersController', ['$http', '$scope', '$state', '$stateParams',  function($http, $scope, $state, $stateParams) {

  const ctrl = this;

  ctrl.recievedData = {
  	users: [],
  	repositories: [],
  	issues: [],
  	code: []
  };

  ctrl.findData = (dataType) => (data, pageNumber) => {
  // ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    console.log($stateParams);
    // $stateParams.pageNumber = $stateParams.pageNumber ? 1 : $stateParams.pageNumber;
    $http({
      method: 'GET',
      url: `https://api.github.com/search/${dataType}?q=${data}&page=${pageNumber}&per_page=all`
      // url: `https://api.github.com/search/${dataType}?q=${data}&per_page=all`
    }).then((response) => {
        ctrl.recievedData[dataType] = response.data.items;
        console.log(ctrl.recievedData);
      }, (error) => {
        console.log(error);
      });
    };

    ctrl.showUserDetails = (user) => {
      console.log(user);
      $state.go('search.user-details', { user: user, username: user.login });
    }

    ctrl.findData($stateParams.dataType)($stateParams.data, $stateParams.pageNumber);
    // ctrl.findData($stateParams.dataType)($stateParams.data);

}]);

// https://api.github.com/search/users?q=leha

// More than 21 repos
// https://api.github.com/search/users?q=leha+repos:%3E21
