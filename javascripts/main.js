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
        .state('exhibition', {
          url: "/exhibition",
          templateUrl: "templates/exhibition.html",
          controller: function ($scope) {
            $scope.startRemain = Math.floor((new Date(2017, 4, 19) - new Date()) / (1000 * 60 * 60 * 24))
          }
        })
        .state('products', {
          url: "/products?:product_id",
          templateUrl: "templates/product.html"
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
    .controller('ProductController', ['$scope', '$location', '$sce', function ($scope, $location, $sce) {
      $scope.products = null
      $scope.product = null
      $scope.loaded = false
      function getProducts () {
        $.ajax({
          url: 'data/product.json',
          type: 'GET',
          dataType: 'json',
          async: true
        }).success(function (products) {
          $scope.products = products
          loadPage()
        }).fail(function (error) {
          console.error('error', error)
        })
      }
      function loadPage () {
        var productId = $location.search()['product_id']
        if (productId) {
          $scope.product = $scope.products[productId]
          $scope.product.trustedDescription = $sce.trustAsHtml($scope.product.description)
          $scope.product.nextPage = '#/products?product_id=' + $scope.product.next
          $scope.product.prevPage = '#/products?product_id=' + $scope.product.prev
          $scope.loaded = true
          $scope.$apply()
        } else {
          console.log('Wrong product id')
        }
      }
      getProducts()
    }])

