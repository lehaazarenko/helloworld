angular.module('helloworld').controller('searchController', ['$state', '$stateParams',  function($state, $stateParams) {

  const ctrl = this;
  console.log('search stateParams: ', $stateParams);
  if ($stateParams.data) {
  	ctrl.username = $stateParams.data;	
  }
  
  // ctrl.pageNumber = ctrl.pageNumber ? 1 : ctrl.pageNumber;
  // console.log('page: ', ctrl.pageNumber);

  ctrl.findData = (dataType) => (data) => {
    console.log('dataType: ', dataType);
  	console.log('data: ', data);
    $state.go('search.users', { 
    	dataType: dataType, 
    	data: data, 
    	pageNumber: 1 
    });
  };
}]);
