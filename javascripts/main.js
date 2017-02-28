angular.module('gungho-girl', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/state1")
        $stateProvider
        .state('state1', {
          url: "/state1",
          templateUrl: "templates/state1.html"
        })
        .state('works-pink', {
          url: "/works-pink",
          templateUrl: "templates/works-pink.html"
        })        

    })
    .controller('HeaderController', ['$scope', function ($scope) {
      $scope.toggleMenu = function () {
        document.querySelector('.menus').classList.toggle('open')
      }
    }])

