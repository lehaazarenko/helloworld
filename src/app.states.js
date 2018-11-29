angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      template: '<search></search><ui-view></ui-view>'
    })
    .state('search.users', {
      url: '/{dataType}/{data}',
      params: {
        dataType: 'users',
        data: ''
      },
      template: '<users></users>'
    })
    .state('search.user-details', {
      url: '/user-details/{username}',
      params: {
        user: {},
        username: ''
      },
      template: '<user-details></user-details>'
    });
});
