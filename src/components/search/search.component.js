(function() {
	angular.module('helloworld').component('search', {
		controller: 'searchController',
		controllerAs: 'searchCtrl',
		templateUrl: 'components/search/search.template.html'
	});
})();