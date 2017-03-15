(function () {
  'use strict';
  angular.module('rdFrontendTest').service('MainService', MainService);

  /** @ngInject */
  function MainService() {
    var mainService = this;
    mainService.query = query;
    mainService.books = [];

    //for test
    var book1 = {};
    book1.title = 'Java pra quem te quero';
    book1.description = 'Um livro pra usar quando você não tem perspectivas melhores na vida. Saiba que sempre tem algo pior...';
    book1.isbn = '12345';
    book1.image = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjCoYrHwtfSAhWEjJAKHRD1BHcQjRwIBw&url=http%3A%2F%2Fcombiboilersleeds.com%2Fkeywords%2Fimage-1.html&psig=AFQjCNFaT3VHH38Ucv48q0Qs2vzPXzL6kw&ust=1489633247533500';

    var book2 = {};
    book2.title = 'Java Forever';
    book2.description = 'Dos mesmos escritores de "Java pra quem te quero", seguindo a mesma linha este é um livro voltado a quem gosta de sofrer';
    book2.isbn = '09876';
    book2.image = 'https://www.google.com.br/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiftb7dwtfSAhUGHpAKHeMmA2AQjRwIBw&url=http%3A%2F%2Fwww.menucool.com%2Fslider%2Fjavascript-image-slider-demo1&psig=AFQjCNFaT3VHH38Ucv48q0Qs2vzPXzL6kw&ust=1489633247533500';

    mainService.books.push(book1);
    mainService.books.push(book2);
    //for test

    //query
    function query(search) {

      'https://www.googleapis.com/books/v1/volumes'

      return mainService.books.filter(function (book) {
        return (book.title.toUpperCase().indexOf(search.toUpperCase()) >= 0) || (book.description.toUpperCase().indexOf(search.toUpperCase()) >= 0) || (book.isbn.toUpperCase().indexOf(search.toUpperCase()) >= 0);
      });
    }

    return mainService;
  }
})();
