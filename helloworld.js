const myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  const helloState = {
    name: 'hello',
    url: '/angular/at2/helloworld/hello',
    template: '<h3>hello world!</h3>'
  }

  const aboutState = {
    name: 'about',
    url: '/angular/at2/helloworld/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  const someMoreState = {
    name: 'more',
    url: '/angular/at2/helloworld/more',
    template: '<h3>Get some more</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(someMoreState);

  $stateProvider.state('search', {
    url: '/angular/at2/helloworld/search/{dataType}/{data}',
    // controller: 'usersController',
    params: {
      dataType: 'users',
      data: ''
    }
    // controller: function($stateParams) {
    //   console.log($stateParams.login);
    //   console.log($stateParams.dataType);
    // }
  });

  $urlRouterProvider.when('/angular/at2/helloworld/console', function() {
    console.log('Console output');
  });

});


// https://api.github.com/users


myApp.controller('helloController', ['$http', function($http) {

  const ctrl = this;

  ctrl.users = [];

  ctrl.arrayOfNone = [1, 2, 3, 4];

  ctrl.userTest = function() {
    console.log('test');
  }

  ctrl.findUser = (username) => {
    console.log('works');
    $http({
    method: 'GET',
    url: `https://api.github.com/users/${username}`
  }).then((response) => {
      // this callback will be called asynchronously
      // when the response is available
      console.log(response);
    }, (error) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(error);
    });
  }

  $http({
    method: 'GET',
    url: 'https://api.github.com/users'
  }).then((response) => {
      // this callback will be called asynchronously
      // when the response is available
      ctrl.users = angular.fromJson(response);
      console.log(response);
    }, (error) => {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(error);
    });
  console.log(ctrl.users);
}]);
