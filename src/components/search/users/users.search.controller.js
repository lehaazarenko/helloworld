(function(){
  'use strict';

  // angular.module('helloworld').controller('usersController', ['$http', '$scope', '$state', '$stateParams', 'searchFactory',  function($http, $scope, $state, $stateParams, searchFactory) {
  angular.module('helloworld').controller('usersSearchController', ['$stateParams', '$q', 'searchFactory',  function($stateParams, $q, searchFactory) {

    const ctrl = this;

    console.log('factory: ',searchFactory);
    console.log('in users controller');

    ctrl.findData = searchFactory.findData;
    ctrl.showUserDetails = searchFactory.showUserDetails;
    ctrl.update = searchFactory.update;
    ctrl.initPages = searchFactory.initPages;

    console.log('ctrl: ', ctrl);

    function init() {
        ctrl.recievedData = {
          users: [],
          repositories: [],
          issues: [],
          code: []
        };

        ctrl.numberOfPages = 0;
        ctrl.pages = [];

        ctrl.params = $stateParams;
        ctrl.params.pageNumber = parseInt(ctrl.params.pageNumber);
        ctrl.findData();

        console.log('find data: ', ctrl);

        ctrl.recievedData = searchFactory.recievedData;
        ctrl.pagesData = searchFactory.pagesData;    
    }

    init();


  }]);

  // https://api.github.com/search/users?q=leha

  // More than 21 repos
  // https://api.github.com/search/users?q=leha+repos:%3E21

})();
