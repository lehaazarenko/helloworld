// angular.module('helloworld').controller('usersController', ['$http', '$scope', '$state', '$stateParams', 'searchFactory',  function($http, $scope, $state, $stateParams, searchFactory) {
angular.module('helloworld').controller('usersController', ['searchFactory',  function(searchFactory) {

  const ctrl = this;

  // ctrl.data = searchFactory;


  // ctrl.init = () => {
  //   ctrl.recievedData = {
  //     users: [],
  //     repositories: [],
  //     issues: [],
  //     code: []
  //   };

  //   ctrl.numberOfPages = 0;
  //   ctrl.pages = [];

  //   ctrl.params = $stateParams;
  //   ctrl.params.pageNumber = parseInt(ctrl.params.pageNumber);
  //   ctrl.findData();
  // };

  // ctrl.findData = () => {
  //   console.log($stateParams);
  //   $http({
  //     method: 'GET',
  //     url: `https://api.github.com/search/${ctrl.params.dataType}?q=${ctrl.params.data}&page=${ctrl.params.pageNumber}&per_page=10`
  //   }).then((response) => {
  //     ctrl.numberOfPages = Math.ceil(response.data.total_count / 10);
  //     ctrl.initPages();
  //     ctrl.recievedData[ctrl.params.dataType] = response.data.items;
  //   }, (error) => {
  //     console.log(error);
  //   });
  // };

  // ctrl.showUserDetails = (user) => {
  //   console.log(user);
  //   $state.go('search.user-details', { user: user, username: user.login });
  // }

  // ctrl.initPages = () => {
  //   ctrl.pages = [];
  //   // debugger;
  //   for (let i = 0; i < (ctrl.numberOfPages < 101 ? ctrl.numberOfPages : 100); i++) {
  //     ctrl.pages.push(i + 1);
  //   }
  // };

  // ctrl.update = () => {
  //   $state.go('search.users', { 
  //     dataType: ctrl.params.dataType, 
  //     data: ctrl.params.data,  
  //     pageNumber: ctrl.params.pageNumber
  //   });
  // };

  console.log('factory: ',searchFactory);
  console.log('ctrl: ', ctrl);

  ctrl.init = searchFactory.init;
  ctrl.findData = searchFactory.findData;
  ctrl.showUserDetails = searchFactory.showUserDetails;
  ctrl.update = searchFactory.update;
  ctrl.initPages = searchFactory.initPages;
  searchFactory.init()
    .then((data) => {
      console.log('data: ', data);
      ctrl.params = data.params;
      ctrl.recievedData = data.recievedData;
      debugger;
      ctrl.pages = data.pages;
      ctrl.numberOfPages = data.numberOfPages;
      console.log('ctrl', ctrl);
    }, (error) => {
      console.log(error);
    });


}]);

// https://api.github.com/search/users?q=leha

// More than 21 repos
// https://api.github.com/search/users?q=leha+repos:%3E21
