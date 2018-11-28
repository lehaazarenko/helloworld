angular.module('helloworld').controller('usersController', ['$http', '$state', '$stateParams',  function($http, $state, $stateParams) {

  const ctrl = this;

  ctrl.recievedData = {
  	users: [],
  	repositories: [],
  	issues: [],
  	code: []
  };

  ctrl.userTest = function() {
    console.log('test');
  };



  ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    $state.go('search', { dataType, data });
    $http({
      method: 'GET',
      // url: `https://api.github.com/users/${username}`
      url: `https://api.github.com/search/${dataType}?q=${data}&per_page=100`
      // header: {
      // 	Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
      // }
    }).then((response) => {
        ctrl.recievedData[dataType] = response.data.items;
        console.log(ctrl.recievedData);
        console.log(response);
      }, (error) => {
        console.log(error);
      });
    };

  ctrl.findUsers = ctrl.findData('users');
  ctrl.findRepos = ctrl.findData('repositories');
  ctrl.findCodes = ctrl.findData('code');
  ctrl.findIssues = ctrl.findData('issues');
  
}]);

// https://api.github.com/search/users?q=leha

// More than 21 repos
// https://api.github.com/search/users?q=leha+repos:%3E21
