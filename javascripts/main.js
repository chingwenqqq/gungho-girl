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
        .state('pink1', {
          url: "/pink1",
          templateUrl: "templates/pink1.html"
        })

    })
    .controller('HeaderController', ['$scope', function ($scope) {
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

$('html, body').animate({ scrollTop: 0 }, 'fast');

