angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('search', {
    url: '/search/{dataType}/{data}',
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
});
