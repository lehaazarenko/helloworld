(function() {


  angular.module('helloworld').controller('userDetailsController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;
    ctrl.isNext = searchFactory.isNext;
    ctrl.isNext($stateParams.index).then((response) => {
        // console.log('isNext response: ', response);
        ctrl.isNext = response;
    }, (error) => {
        // console.log('isNext error: ', error);
    });

    // console.log(searchFactory.isPrev);

    ctrl.isPrev = $stateParams.index > 0;
    // console.log('ctrl.isPrev', ctrl.isPrev);


    ctrl.userData = searchFactory.userData;
    // console.log('State Details: ');
    // console.log($stateParams);
    ctrl.findUser = searchFactory.findUser;
    // console.log(ctrl.findUser);
    // console.log('userData Details: ', ctrl.userData);
    // console.log('$stateParams in Details: ', $stateParams);

    ctrl.findUser($stateParams.index).then((response) => {
    // ctrl.findUser($stateParams.index, 10).then((response) => {
        // console.log('response in user-details: ', response);
        // console.log('isNext value: ', ctrl.isNext);
        // ctrl.userData = response.data.items[0];
        ctrl.userData = response;
        // console.log('ctrl.userData', ctrl.userData);
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
