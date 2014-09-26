
	var app = angular.module("angularBookApi", []);
	app.controller('bookController', ['$scope', '$http', function($scope, $http){
		var url="https://www.googleapis.com/books/v1/volumes";
		var config = {
			params: {
				q: "government",
				callback: 'JSON_CALLBACK'
			}
		
		};

		 $scope.searchbook = "government";
		$scope.getBooks = function() {
			config.params.q = $scope.searchbook;
			$http.jsonp(url, config).success(function(response){
				console.log(response);
				$scope.books = response.items;
				
			});
		}
		
		$scope.getBooks();

	}]);