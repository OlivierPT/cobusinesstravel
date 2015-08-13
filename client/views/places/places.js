angular.module("cobiztravel").controller("PlacesCtrl", ['$scope', '$stateParams', '$meteor',
  function($scope, $stateParams, $meteor){

    $scope.map = {
      center: {
        latitude: 43.58,
        longitude: 1.43
      },
      zoom: 11,
      events: {}
    };
  }
]);
