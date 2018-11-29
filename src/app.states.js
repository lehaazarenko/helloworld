angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('search', {
      url: '/search',
      template: '<search></search>'
    })
    .state('search.users', {
      url: '/{dataType}/{data}',
      params: {
        dataType: 'users',
        data: ''
      },
      template: '<users></users>'
    });
});
