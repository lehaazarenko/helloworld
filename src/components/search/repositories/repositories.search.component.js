(function() {
	
	angular.module('helloworld').component('repositoriesSearch', {
		controller: 'repositoriesSearchController',
		controllerAs: 'repositoriesSearchCtrl',
		templateUrl: 'components/search/repositories/repositories.search.template.html'
	});

})();