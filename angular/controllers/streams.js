angular.module('twitchControllers').controller('streamsCtrl', ['$scope', '$http', '$routeParams', '$TwitchApi', function($scope, $http, $routeParams, $TwitchApi) 
{
  $scope.obj = {};
  $scope.obj.query = "";
  $scope.game_name = $routeParams.name;
  $scope.streams = [];
  $scope.api = $TwitchApi;
  $scope.url = "https://api.twitch.tv/kraken/streams?limit=10&game=" + encodeURI($scope.game_name);

  $scope.scroll = function() {
    $scope.api.request($scope.url).then(function() {
      $scope.streams = $scope.streams.concat($scope.api.result.streams);
      $scope.url = $scope.api.result._links.next;
    });
  }
}]);
