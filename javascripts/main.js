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
        .state('works-purple', {
          url: "/works-purple",
          templateUrl: "templates/works-purple.html"
        })
        .state('works-blue', {
          url: "/works-blue",
          templateUrl: "templates/works-blue.html"
        })
        .state('purple1', {
          url: "/purple1",
          templateUrl: "templates/purple1.html"
        })

    })
    .controller('MainController', ['$scope', function ($scope) {
      $scope.toggleMenu = function () {
        document.getElementsByClassName('menu-button')[0].classList.toggle('open')
        document.getElementsByClassName('mobile-menu-wrapper')[0].classList.toggle('open')
      }
      $scope.changePage = function () {
        document.getElementsByClassName('menu-button')[0].classList.remove('open')
        document.getElementsByClassName('mobile-menu-wrapper')[0].classList.remove('open')
        $('html,body').scrollTop(0)
      }
    }])

$(document).ready(function () {
  var footer = $('footer')[0]
  var windowHeight = $(window).height()
  $(window).scroll(function (event) {
    var footerPosition = footer.offsetTop - windowHeight
    var position = $(document).scrollTop()
    if (position >= footerPosition) {
    }
    
  })
})

