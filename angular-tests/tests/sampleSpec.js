'use strict';


describe('Testing the controller', function(){
  beforeEach(module("sampleapp"));
  var sampleCtrl, scope;
  beforeEach(inject(function($controller,$rootScope){
	scope = $rootScope;
	sampleCtrl = $controller("SampleCtrl",{
		$scope: scope
	});
  }));
  
    it('should say hello', function(){
	expect(scope.hello).toBe("Hello Developer.");
	
    });
  
});


describe('MyCtrl', function() {
    beforeEach(module("sampleapp"));
    var scope, controller;

    beforeEach(inject(function($controller, $rootScope) {
         scope = $rootScope;
         controller = $controller("MyCtrl", {
              $scope: scope
         });
    }));
    
    it('has correct initial values', function() {
        expect(scope.value).toBe(0);
        expect(scope.maxValue).toBe(3);  
    });
    
    it('increments correctly', function() {
        scope.incrementValue();
        expect(scope.value).toBe(1);
        scope.incrementValue();
        expect(scope.value).toBe(2);
        scope.incrementValue();
        expect(scope.value).toBe(3);
        scope.incrementValue();
        expect(scope.value).toBe(0);
    });
});

describe('MyHttpCtrl', function() {
	beforeEach(module("sampleapp"));
    var scope, controller, httpBackend;

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        scope = $rootScope;
        httpBackend = $httpBackend;
        
        controller = $controller("MyHttpCtrl", {
              $scope: scope
         });
    }));
    
    it('sets correct data', function() {
         httpBackend.expectGET('http://localhost:8080/getusers').respond(200, 
            [{ "name" : "Piyas De","email" : "piyas.de@gmail.com"}]
        );
        httpBackend.flush();
        expect(scope.users.length).not.toBe(0);
        expect(scope.users.length).toBe(1);
        //expect(scope.users.length).toBe(2);
    });
    
});