(function () {
  'use strict';
  angular.module('rdFrontendTest').service('MainService', MainService);

  /** @ngInject */
  function MainService($http) {
    var mainService = this;
    mainService.query = query;
    mainService.books = [];

    //query
    function query(search) {
      var url = 'https://www.googleapis.com/books/v1/volumes?q=' + search + '&orderBy=relevance';
      return $http({method: 'GET', url: url});
    }

    return mainService;
  }
})();
