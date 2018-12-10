(function(){
  'use strict';

  // angular.module('helloworld').controller('usersController', ['$http', '$scope', '$state', '$stateParams', 'searchFactory',  function($http, $scope, $state, $stateParams, searchFactory) {
  angular.module('helloworld').controller('usersSearchController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;

    // console.log('factory: ',searchFactory);
    // console.log('in users controller');

    ctrl.findData = searchFactory.findData;
    ctrl.showUserDetails = searchFactory.showUserDetails;
    // console.log('showUserDetails: ', ctrl.showUserDetails);
    ctrl.update = searchFactory.update;
    ctrl.initPages = searchFactory.initPages;
    ctrl.isNumberOfPagesValid = searchFactory.isNumberOfPagesValid;

    // console.log('ctrl: ', ctrl);

    function init() {
        if (!ctrl.isNumberOfPagesValid($stateParams.pageNumber)) {
          $state.go('search.page-not-found');
          // console.log('isNumberOfPagesValid: ', isNumberOfPagesValid);
        } else {
          ctrl.recievedData = {
            users: [],
            repositories: [],
            issues: [],
            code: []
          };

          ctrl.params = $stateParams;
          ctrl.params.pageNumber = parseInt(ctrl.params.pageNumber);
          ctrl.findData();

          // console.log('find data: ', ctrl);

          // console.log('pageNumber in usersSearch: ', ctrl.params.pageNumber);

          ctrl.recievedData = searchFactory.recievedData;
          ctrl.pagesData = searchFactory.pagesData;    

          if (ctrl.params.pageNumber > ctrl.pagesData.numberOfPages && ctrl.pagesData.numberOfPages !== 0) {
            $state.go('search.page-not-found');
          }

        }
        
    }

    init();


  }]);

  // https://api.github.com/search/users?q=leha

  // More than 21 repos
  // https://api.github.com/search/users?q=leha+repos:%3E21

})();
