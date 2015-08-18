angular.module('cobiztravel').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('sign', {
        url: '/sign',
        views: {
          "content": { templateUrl: 'client/views/users/sign.ng.html' }
        }
      })
      .state('logout', {
        url: '/logout',
        resolve: {
        "logout": ['$meteor', '$state', function($meteor, $state) {
            return $meteor.logout().then(function(){
                    $state.go('sign');
                }, function(err){
                    console.log('logout error - ', err);
                });
            }]
       }
     }).state('places', {
        url: '/places',
        views: {
          "left-toolbar": { templateUrl: 'client/views/leftToolbar/leftToolbar.ng.html' },
          "main-toolbar": { templateUrl: 'client/views/mainToolbar/mainToolbar.ng.html' },
          "content": { templateUrl: 'client/views/places/places.ng.html' }
        },
        controller: 'PlacesCtrl',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      })

      $urlRouterProvider.otherwise('/places');
}]);
