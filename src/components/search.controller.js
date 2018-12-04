angular.module('helloworld').controller('searchController', ['$state',  function($state) {

  const ctrl = this;
  // ctrl.pageNumber = ctrl.pageNumber ? 1 : ctrl.pageNumber;
  // console.log('page: ', ctrl.pageNumber);

  ctrl.findData = (dataType) => (data) => {
    console.log('dataType: ', dataType);
  	console.log('data: ', data);
    $state.go('search.users', { dataType: dataType, data: data, pageNumber: '1' });
  };
}]);