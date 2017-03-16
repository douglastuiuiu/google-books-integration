(function() {
  'use strict';

  angular
    .module('rdFrontendTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
