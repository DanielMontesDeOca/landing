(function() {
  'use strict';

  angular
    .module('agavelab')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
