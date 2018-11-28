const myApp = angular.module('helloworld', ['ui.router']);

// https://api.github.com/users

myApp.controller('helloController', ['$http', function($http) {

  const ctrl = this;

  ctrl.users = [];

  $http({
    method: 'GET',
    url: 'https://api.github.com/users'
  }).then((response) => {
      ctrl.users = angular.fromJson(response);
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  console.log(ctrl.users);
}]);
