twitchServices.factory('$TwitchApi', ['$http', function($http) {
  var service = {};
  service.result = {};
  service.request = function(url) {
    return $http.jsonp(url + "&callback=JSON_CALLBACK").then(function(data) {
      data = data.data;
      service.result = data;
    });
  };
  return service;
}]);
