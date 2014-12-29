var app = angular.module("sampleapp",[]);
app.controller("SampleCtrl",function($scope){
	$scope.hello = "Hello Developer.";
});


app.controller("MyCtrl", function($scope) {
    $scope.value = 0;
    $scope.maxValue = 3;
    $scope.incrementValue = function() {
        if ($scope.value < $scope.maxValue) {
            $scope.value++;
        } else {
            $scope.value = 0;
        }
    };
});

app.controller("MyHttpCtrl", function($scope, $http) {
    $scope.users = {};

    $http.get('http://localhost:8080/getusers').success(function(data) {
        $scope.users = data;
    });
});


