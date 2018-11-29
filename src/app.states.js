angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('search', {
    url: '/search/{dataType}/{data}',
    params: {
      dataType: 'users',
      data: ''
    },
    template: '<users></users>',
    controller: 'usersController'
  });

  $stateProvider.state('home', {
    url: '/',
    template: '<users></users>'
  });
});
