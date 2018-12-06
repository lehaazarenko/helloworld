(function() {

  angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('search', {
        url: '/search',
        template: '<search></search><ui-view></ui-view>'
      })
      .state('search.users', {
        url: '/users/{data}/{pageNumber}',
        // url: '/{dataType}/{data}',
        params: {
          dataType: 'users',
          data: '',
          pageNumber: '1'
        },
        template: '<users-search></users-search>'
      })
      .state('search.repositories', {
        url: '/repositories/{data}/{pageNumber}',
        // url: '/{dataType}/{data}',
        params: {
          dataType: 'repositories',
          data: '',
          pageNumber: '1'
        },
        template: '<repositories-search></repositories-search>'
      })
      .state('search.issues', {
        url: '/issues/{data}/{pageNumber}',
        // url: '/{dataType}/{data}',
        params: {
          dataType: 'issues',
          data: '',
          pageNumber: '1'
        },
        template: '<issues-search></issues-search>'
      })
      .state('search.code', {
        url: '/code/{data}/{pageNumber}',
        // url: '/{dataType}/{data}',
        params: {
          dataType: 'code',
          data: '',
          pageNumber: '1'
        },
        template: '<code-search></code-search>'
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
})();