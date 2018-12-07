(function() {

	angular.module('helloworld').component('userDetails', {
		controller: 'userDetailsController',
		controllerAs: 'userDetailsCtrl',
		templateUrl: 'components/user-details/user-details.template.html'
	});

})();