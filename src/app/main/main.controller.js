(function () {
  'use strict';
  angular.module('rdFrontendTest').controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, MainService) {
    var vm = this;

    vm.save = save;
    vm.favorite = favorite;
    vm.books = [];

    //watch to search books in Google Books service
    $scope.$watch('vm.search', function () {
      if (!!vm.search && vm.search.length >= 3) {
        vm.books = MainService.query(vm.search);
      }
    });

    //function to favorite book saving in localStorage list 'favoritedBooks'
    function favorite(book) {
      console.log('favoritou ' + book.title);
    }

    //function to save book in localStorage list 'savedBooks'
    function save(book) {
      console.log('salvou ' + book.title);
    }

    return vm;

  }
})();
