(function() {
  'use strict';

  angular
    .module('interviewTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
