var twitchServices = angular.module("twitchServices", []);
var twitchControllers = angular.module('twitchControllers', []);

var twitch = angular.module("twitch", ['ngRoute', 'twitchControllers', 'twitchServices', 'infinite-scroll']);

twitch.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/games', {
      templateUrl: 'parts/games.html',
      controller: 'gamesCtrl'
    }).
    when('/game/:name', {
      templateUrl: 'parts/streams.html',
      controller: 'streamsCtrl'
    }).
    when('/channel/:name', {
      templateUrl: 'parts/channel.html',
      controller: 'channelCtrl'
    }).
    otherwise({
      redirectTo: '/games'
    });
}]);
