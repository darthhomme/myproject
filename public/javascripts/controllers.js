var app = angular.module('lyricsApp', []);
app.controller('lyricsCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    $http.get('./data.json').then(function(response) {
      $scope.applicants = response.applicants;
      $scope.name = [];
      angular.forEach(data.applicants, function(applicant, index) {
        $scope.applicants.push(applicant);
        console.log('hi');
      });
      // $scope.isVisible = function(name) {
      //   return true;
      // };
    });
  },
]);
