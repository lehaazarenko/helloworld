(function() {


  angular.module('helloworld').controller('userDetailsController', ['$state', '$stateParams', '$q', 'searchFactory',  function($state, $stateParams, $q, searchFactory) {

    const ctrl = this;

    ctrl.userData = searchFactory.userData;
    console.log('State Details: ');
    console.log($stateParams);
    ctrl.findUser = searchFactory.findUser;
    console.log(ctrl.findUser);
    console.log('userData Details: ', ctrl.userData);

    ctrl.findUser().then((response) => {
        console.log('response in user-details: ', response);
        ctrl.userData = response.data.items[0];
        console.log('ctrl.userData', ctrl.userData);
    }, (error) => {
        console.log('kek');
    });

  }]);

})();