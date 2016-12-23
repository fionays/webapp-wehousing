

angular.module('app').controller('ApartmentCtrl', ApartmentCtrl);

ApartmentCtrl.$inject = ['$state', 'ApartmentFactory'];

function ApartmentCtrl($state, ApartmentFactory) {

	var self = this;

	self.init = function() {
		// call the factory to get the current apartment object
		self.apartment = ApartmentFactory.getCurrentApartment();
	};

	self.return = function() {
		$state.go('apartments');
	};

	// controller start fn
	self.init();
}