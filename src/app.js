const myApp = angular.module('helloworld', ['ui.router']);

// https://api.github.com/users

// myApp.controller('helloController', ['$http', '$state', function($http, $state) {

//   const ctrl = this;

//   $http({
//     method: 'GET',
//     url: 'https://api.github.com/users'
//   }).then((response) => {
//       ctrl.users = angular.fromJson(response);
//       console.log(response);
//     }, (error) => {
//       console.log(error);
//     });

//   $state.go('home');
// }]);
