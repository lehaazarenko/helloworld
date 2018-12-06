(function() {
	
	angular.module('helloworld').component('usersSearch', {
		controller: 'usersSearchController',
		controllerAs: 'usersSearchCtrl',
		templateUrl: 'components/search/users/users.search.template.html'
	});

})();