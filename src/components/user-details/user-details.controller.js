(function() {


  angular.module('helloworld').controller('userDetailsController', ['$state', '$stateParams',  function($state, $stateParams) {

    const ctrl = this;

    ctrl.userData = $stateParams.user;
    console.log('userData Details: ');
    console.log(ctrl.userData);
    console.log('State Details: ');
    console.log($stateParams);
    ctrl.kek = 'kek';

    // ctrl.findData = (dataType) => (data) => {
    //   console.log('dataType: ', dataType);
    // 	console.log('data: ', data);
    //   $state.go('search.users', { dataType: dataType, data: data});
    // };

  }]);

})();