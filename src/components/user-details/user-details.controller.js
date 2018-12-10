(function() {


  angular.module('helloworld').controller('userDetailsController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;
    ctrl.isNext = searchFactory.isNext;
    ctrl.isNext($stateParams.index).then((response) => {
        ctrl.isNext = response;
    }, (error) => {
        // console.log('isNext error: ', error);
    });

    ctrl.isPrev = $stateParams.index > 0;


    ctrl.userData = searchFactory.userData;
    ctrl.findUser = searchFactory.findUser;

    ctrl.findUser($stateParams.index).then((response) => {
        ctrl.userData = response;
    }, (error) => {
        console.log('kek');
    });

    ctrl.goToPrev = () => {
        $state.go('search.user-details', {  
            data: $stateParams.data, 
            index: parseInt($stateParams.index) - 1
        });
    };

    ctrl.goToNext = () => {
        $state.go('search.user-details', {  
            data: $stateParams.data, 
            index: parseInt($stateParams.index) + 1
        });
    };

  }]);

})();
