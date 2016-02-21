angular.module('twitchControllers').controller('channelCtrl', ['$scope', '$http', '$routeParams', '$TwitchApi', function($scope, $http, $routeParams, $TwitchApi) 
{
  $scope.api = $TwitchApi;
  $scope.channel = $routeParams.name;
  $scope.api.request("https://api.twitch.tv/kraken/streams/" + $scope.channel + "?limit=1").then(function() {
    $scope.stream = $scope.api.result.stream;
  });
}]);
