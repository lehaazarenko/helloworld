(function() {

  angular.module('helloworld').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/search');

    $stateProvider
      .state('default', {
        url: '/',
        redirectTo: 'search'
      })
      .state('search', {
        url: '/search',
        template: '<search></search><ui-view></ui-view>'
      })
      .state('search.users', {
        url: '/users/{data}/{pageNumber}',
        params: {
          dataType: 'users',
          data: '',
          pageNumber: '1'
        },
        template: '<users-search></users-search>'
      })
      .state('search.repositories', {
        url: '/repositories/{data}/{pageNumber}',
        params: {
          dataType: 'repositories',
          data: '',
          pageNumber: '1'
        },
        template: '<repositories-search></repositories-search>'
      })
      .state('search.issues', {
        url: '/issues/{data}/{pageNumber}',
        params: {
          dataType: 'issues',
          data: '',
          pageNumber: '1'
        },
        template: '<issues-search></issues-search>'
      })
      .state('search.code', {
        url: '/code/{data}/{pageNumber}',
        params: {
          dataType: 'code',
          data: '',
          pageNumber: '1'
        },
        template: '<code-search></code-search>'
      })
      .state('search.user-details', {
        url: '/{dataType}/{data}/user-details/{index}',
        params: {
          dataType: 'users',
          data: ''
        },
        template: '<user-details></user-details>'
      })
      .state('search.page-not-found', {
        url: '/page-not-found',
        template: '<h2 class="not-found">Page not found</h2>'
      });
  });
})();