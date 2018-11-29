angular.module('helloworld').controller('searchController', ['$state',  function($state) {

  const ctrl = this;

  ctrl.findData = (dataType) => (data) => {
    console.log('dataType: ', dataType);
  	console.log('data: ', data);
    $state.go('search.users', { dataType: dataType, data: data});
  };

}]);