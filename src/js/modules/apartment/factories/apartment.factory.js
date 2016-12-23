angular.module('app').factory('ApartmentFactory', ApartmentFactory);

function ApartmentFactory() {

	var apartmentFactory = this;

	var apartment = '';

	apartmentFactory.setCurrentApartment = function(cur_apartment) {
		apartment = cur_apartment;
	};

	apartmentFactory.getCurrentApartment = function() {
		return apartment;
	};

	return apartmentFactory;
}
