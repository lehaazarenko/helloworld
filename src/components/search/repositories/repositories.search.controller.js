(function(){
  'use strict';

    angular.module('helloworld').controller('repositoriesSearchController', ['$stateParams', '$q', 'searchFactory',  function($stateParams, $q, searchFactory) {

    const ctrl = this;

    console.log('factory: ',searchFactory);
    console.log('in repos controller');

    ctrl.findData = searchFactory.findData;
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

})();
