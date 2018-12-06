(function(){
  'use strict';

    angular.module('helloworld').controller('repositoriesSearchController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;

    console.log('factory: ',searchFactory);
    console.log('in repos controller');

    ctrl.findData = searchFactory.findData;
    ctrl.update = searchFactory.update;
    ctrl.initPages = searchFactory.initPages;
    ctrl.isNumberOfPagesValid = searchFactory.isNumberOfPagesValid;

    console.log('ctrl: ', ctrl);

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

          console.log('find data: ', ctrl);

          ctrl.recievedData = searchFactory.recievedData;
          ctrl.pagesData = searchFactory.pagesData;    

          if (ctrl.params.pageNumber > ctrl.pagesData.numberOfPages) {
            $state.go('search.page-not-found');
          }

        }
        
    }

    init();

  }]);

})();
