angular.module('helloworld').controller('usersController', ['$http', function($http) {

  const ctrl = this;

  ctrl.recievedData = {
  	users: [],
  	repositories: [],
  	issues: [],
  	code: []
  }

  ctrl.userTest = function() {
    console.log('test');
  }

  ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    $http({
    method: 'GET',
    // url: `https://api.github.com/users/${username}`
    url: `https://api.github.com/search/${dataType}?q=${data}` 
    // header: {
    // 	Authorization: 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
    // }
  }).then((response) => {
      // this callback will be called asynchronously
      // when the response is available
      ctrl.recievedData[dataType] = response.data.items;
      console.log(ctrl.recievedData);
      console.log(response);
    }, (error) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(error);
    });
  }

  ctrl.findUsers = ctrl.findData('users');
  ctrl.findRepos = ctrl.findData('repositories');
  ctrl.findCodes = ctrl.findData('code');
  ctrl.findIssues = ctrl.findData('issues');
  
}]);

// https://api.github.com/search/users?q=leha

// More than 21 repos
// https://api.github.com/search/users?q=leha+repos:%3E21