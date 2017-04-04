(function() {
  'use strict';

  angular
    .module('interviewTest')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment,$scope,$location,$log) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();

        $scope.isActive = function (viewLocation) {
          // $log.log("Location path :" + $location.path());
          // $log.log("viewLocation :" + viewLocation);
            return viewLocation === $location.path();
        };

    }
  }

})();
