angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.addr = "";
    $scope.coordinates = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */



    $scope.addListing = function() {
      $scope.format = {
        code: '',
        name: '',
        coordinates: {
          longitude: '',
          latitude: ''
        },
        address: ''
      };

      $scope.listings.push($scope.format);


    };


    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);

    };




    //$scope.show = false;  //boolean for showing details.
    $scope.showDetails = function(index) {
      $scope.addr = $scope.listings[index].address;
      $scope.coordinates = $scope.listings[index].coordinates;


    };
      
  }
]);