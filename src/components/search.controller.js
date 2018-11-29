angular.module('helloworld').controller('searchController', ['$state',  function($state) {

  const ctrl = this;

  ctrl.findData = (dataType) => (data) => {
  	console.log('dataType: ', dataType);
    $state.go('search.users', { dataType, data });
  }

}]);