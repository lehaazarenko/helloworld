(function(){
  'use strict';

  angular.module('helloworld').controller('usersSearchController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;


    ctrl.findData = searchFactory.findData;
    ctrl.showUserDetails = searchFactory.showUserDetails;
    ctrl.update = searchFactory.update;
    ctrl.initPages = searchFactory.initPages;
    ctrl.isNumberOfPagesValid = searchFactory.isNumberOfPagesValid;

    function init() {
        if (!ctrl.isNumberOfPagesValid($stateParams.pageNumber)) {
          $state.go('search.page-not-found');
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
