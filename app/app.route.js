/**
 * Created by dariusz on 15.01.16.
 */

angular.module('TeamProject')
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('root', {
                    url: '',
                    abstract: true,
                    views: {
                        'header': {
                            templateUrl: 'components/shared/header/header.html',
                            controller: 'headerController'
                        }
                    }
                })
                .state('root.home', {
                    url: '/',
                    views: {
                        'content@': {

                        }
                    }
                })
        }]);
