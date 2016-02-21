angular.module('twitchControllers').controller('gamesCtrl', ['$scope', '$http', '$TwitchApi', function($scope, $http, $TwitchApi) 
{
  $scope.obj = {};
  $scope.obj.query = "";
  $scope.api = $TwitchApi;
  $scope.api.request("https://api.twitch.tv/kraken/games/top?limit=12");

  $scope.next = function() { $scope.api.request($scope.api.result._links.next); }
  $scope.previous = function() { $scope.api.request($scope.api.result._links.prev); }
}]);
