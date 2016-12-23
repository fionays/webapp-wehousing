angular.module('app').service('ApartmentsService', ApartmentsService);

ApartmentsService.$inject = ['$http', '$q'];

function ApartmentsService($http, $q) {

	var uri = 'data/apartments.json';

	this.getApartments = function() {
		var deferred = $q.defer();

		$http.get(uri).then(function(response) {
			deferred.resolve(response);
			console.log(response.data);
		}, function(error) {
			deferred.reject(error);
			console.log(error);
		});
		return deferred.promise;
	}
}