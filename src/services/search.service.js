(function() {
    'use strict';

    // searchFactory.$inject = ['$http', '$scope', '$state', '$stateParams'];

    function searchFactory($http, $state, $stateParams, $q) {

        const calService = {};

        calService.init = () => {
            return $q((resolve, reject) => {
                calService.recievedData = {
                users: [],
                repositories: [],
                issues: [],
                code: []
            };

            calService.numberOfPages = 0;
            calService.pages = [];

            calService.params = $stateParams;
            calService.params.pageNumber = parseInt(calService.params.pageNumber);
            calService.findData();
            console.log('find data: ', calService);
            resolve(calService);    
            });
        };

        calService.findData = () => {
            console.log($stateParams);
            $http({
                method: 'GET',
                url: `https://api.github.com/search/${calService.params.dataType}?q=${calService.params.data}&page=${calService.params.pageNumber}&per_page=10`
            }).then((response) => {
                calService.numberOfPages = Math.ceil(response.data.total_count / 10);
                calService.initPages();
                calService.recievedData[calService.params.dataType] = response.data.items;
            }, (error) => {
                console.log(error);
            });
        };    

        calService.showUserDetails = (user) => {
            console.log(user);
            $state.go('search.user-details', { user: user, username: user.login });
        }

        calService.initPages = () => {
            calService.pages = [];
            // debugger;
            for (let i = 0; i < (calService.numberOfPages < 101 ? calService.numberOfPages : 100); i++) {
                calService.pages.push(i + 1);
            }
        };

        calService.update = () => {
            $state.go('search.users', { 
                dataType: calService.params.dataType, 
                data: calService.params.data,  
                pageNumber: calService.params.pageNumber
            });
        };

        return calService;
    }

    angular.module('helloworld').factory('searchFactory', ['$http', '$state', '$stateParams', '$q', searchFactory]);
})();
