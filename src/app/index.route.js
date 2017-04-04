(function() {
  'use strict';

  angular
    .module('interviewTest')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
        .state('exercise', {
        url: '/exercise',
        templateUrl: 'app/exercise/exercise.html',
        controller: 'ExerciseController',
        controllerAs: 'exercise'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
