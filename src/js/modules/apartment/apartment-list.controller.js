

angular.module('app').controller('ApartmentsCtrl', ApartmentsCtrl);

ApartmentsCtrl.$inject = ['$state', 'ApartmentsService', 'ApartmentFactory'];

function ApartmentsCtrl($state, ApartmentsService, ApartmentFactory) {

	var self = this;

	self.itemsPerPage = 5;
	self.currentPage = 1;
	self.totalPages = 12;
	self.totalItems = self.itemsPerPage * self.totalPages;

	self.init = function() {
		self.criteria = 'popularity';

		// invoke aprtments service to get data
		ApartmentsService.getApartments().then(function(response) {
			// have one local variable holding the entire array
			self.totalApartments = response.data.apartments;
			// by default, the current page will display 
			// the first element of the apartments array
			self.apartments = response.data.apartments.slice(0,5);
		});
	}

	self.switchToPrice = function() {
		self.criteria = 'price';
		console.log(self.criteria);
	};

	self.switchToPopularity = function() {
		self.criteria = 'popularity';
		console.log(self.criteria);
	};

	self.goToDetailView = function(apartment) {
		ApartmentFactory.setCurrentApartment(apartment);
		console.log(ApartmentFactory.getCurrentApartment());
		$state.go('apartment');
	};

	self.isActive = function(input) {
		return self.criteria == input
	};

	self.getNextPage = function(startIndex, array) {
		var startItemNumber = (startIndex+1)*self.itemsPerPage-self.itemsPerPage;
		var endItemNumber = (startIndex+1)*self.itemsPerPage;
		console.log(array);
		console.log(startItemNumber);
		console.log(endItemNumber);
		self.apartments = array.slice(startItemNumber, endItemNumber);
		self.currentPage = startIndex+1;
	}

	self.init();
}
