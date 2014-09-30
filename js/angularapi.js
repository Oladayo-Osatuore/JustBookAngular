
	var app = angular.module("angularBookApi", []);
	app.controller('bookController', ['$scope', '$http', function($scope, $http){
		var url="https://www.googleapis.com/books/v1/volumes";
		var config = {
			params: {
				q: "government",
				callback: 'JSON_CALLBACK'
			}
		
		};

		$scope.getBooks = function(books) {


			if(books) {
				config.params.q = books;
			}else{
				config.params.q = $scope.searchbook;
			}
			$http.jsonp(url, config).success(function(response){
				console.log(response);
				$scope.books = response.items;
				$scope.searchbook= "";
			});
		}
		

		$scope.getBooks("peace");

	}]);
