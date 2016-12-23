(function(){

  angular.module('app',['ui.router']);

  angular.module('app').config(config);

  function config($urlRouterProvider, $stateProvider) {
    'ngInject';

    $stateProvider
    .state('apartments', {
      url: '/apartments',
      controller:'ApartmentsCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'src/js/modules/apartment/apartment-list.view.html'
    })
    .state('apartment', {
      url: '/apartments/:name',
      controller:'ApartmentCtrl',
      controllerAs: '$ctrl',
      templateUrl: 'src/js/modules/apartment/apartment.view.html'
    });

    $urlRouterProvider.otherwise('/apartments');
  }

})();
