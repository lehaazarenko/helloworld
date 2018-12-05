(function () {
  'use strict';

  angular.module('helloworld')
    .config(['$locationProvider', '$httpProvider',
      function config($locationProvider) {
        $locationProvider.html5Mode(true);
      }
    ])
    .factory('interceptor', function () {
      return {
        request: function (config) {
          // console.log(config);
          config.headers['Authorization'] = 'Basic b0b662e198b6b319b9a149ce4c9eff6ab7e72300';
          config.headers['Accept'] = 'application/json;odata=verbose';
          return config;
        }
      };
    })
    .config(function ($httpProvider) {
      $httpProvider.defaults.cache = true;
      $httpProvider.interceptors.push('interceptor');
    });
})();
