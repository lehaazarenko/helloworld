(function() {
    'use strict';

    // searchFactory.$inject = ['$http', '$scope', '$state', '$stateParams'];

    function searchFactory($http, $state, $stateParams, $q) {

        const calService = {};

        calService.recievedData = {
            users: [],
            repositories: [],
            issues: [],
            code: []
        };

        calService.pagesData = {
            numberOfPages: 0,
            pages: []
        };

        calService.params = $stateParams;
        calService.params.pageNumber = parseInt(calService.params.pageNumber);
        // console.log('calService.params', calService.params);

        calService.findData = () => {
            // console.log($stateParams);
            const url = `https://api.github.com/search/${calService.params.dataType}?q=${calService.params.data}&page=${calService.params.pageNumber}&per_page=10`
            $http({
                method: 'GET',
                url: url
            }).then((response) => {
                calService.pagesData.numberOfPages = Math.ceil(response.data.total_count / 10);
                calService.initPages();
                calService.recievedData[calService.params.dataType] = response.data.items;
            }, (error) => {
                // console.log(error);
            });
        };    

        calService.findUser = (index) => {
            // console.log('index in service: ', index);
            // console.log('findUser: ', $stateParams);
            let pageNumber;
            if (index % 10 === 0) {
                pageNumber = index / 10 + 1;
            } else {
                pageNumber = Math.ceil(index / 10);    
            }
            const position = index - (pageNumber - 1) * 10;
            // console.log('position in service: ', position);
            // console.log('pageNumber in service: ', pageNumber);
            // console.log('params in findUser: ', calService.params);
            // const url = `https://api.github.com/search/${calService.params.dataType}?q=${calService.params.data}+user:${calService.params.data}`;
            const url = `https://api.github.com/search/${calService.params.dataType}?q=${calService.params.data}&page=${pageNumber}&per_page=10`;//${calService.params.login}`;
            let defer = $q.defer();
            // console.log('url: ', url);
            $http({
                method: 'GET',
                url: url
            }).then((response) => {
                // console.log('findUser response: ', response);
                calService.userData = response.data.items[position];
                // console.log('userData on service: ', calService.userData);
                defer.resolve(response.data.items[position]);
            }, (error) => {
                // console.log(error);
                defer.reject(error);
            });
            return defer.promise;
        };

        // calService.isPrev = (index) => {
        //     return index > 0;
        // }

        calService.isNext = (index) => {
            let nextPage;
            // debugger;
            const nextIndex = parseInt(index) + 1;
            if (nextIndex % 10 === 0) {
                nextPage = nextIndex / 10 + 1;
            } else {
                nextPage = Math.ceil(nextIndex / 10);    
            }

            // const nextPage = nextIndex % 10 === 0 ? pageNumber + 1 : pageNumber;
            const position = nextIndex - (nextPage - 1) * 10;
            // console.log('nextPage: ', nextPage);
            const url = `https://api.github.com/search/${calService.params.dataType}?q=${calService.params.data}&page=${nextPage}&per_page=10`;
            let defer = $q.defer();
            // console.log('url: ', url);
            $http({
                method: 'GET',
                url: url
            }).then((response) => {
                // console.log('findUser response: ', response);
                // console.log('userData on service: ', calService.userData);
                // console.log('next pos: ', response.data.items[position]);
                defer.resolve(response.data.items[position] ? true : false);
            }, (error) => {
                // console.log(error);
                defer.reject(error);
            });
            return defer.promise;
        };

        calService.showUserDetails = (index, pageNumber) => {
            // console.log('index, pageNumber: ');
            // console.log(index, pageNumber);
            // console.log('custom index: ', (pageNumber - 1) * 10 + index);
            $state.go('search.user-details', { 
                // login: calService.recievedData.users[index].login, 
                data: $stateParams.data, 
                index: (pageNumber - 1) * 10 + index//, 
                // pageNumber: pageNumber 
            });
        }

        calService.isNumberOfPagesValid = (number) => {
            return number < 101;
        };

        calService.initPages = () => {
            calService.pagesData.pages = [];
            // debugger;
            for (let i = 0; i < (calService.pagesData.numberOfPages < 101 ? calService.pagesData.numberOfPages : 100); i++) {
                calService.pagesData.pages.push(i + 1);
            }
        };

        calService.update = () => {
            $state.go(`search.${calService.params.dataType}`, { 
                dataType: calService.params.dataType, 
                data: calService.params.data,  
                pageNumber: calService.params.pageNumber
            });
        };

        return calService;
    }

    angular.module('helloworld').factory('searchFactory', ['$http', '$state', '$stateParams', '$q', searchFactory]);
})();
