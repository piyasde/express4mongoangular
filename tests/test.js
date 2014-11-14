'use strict';
require('should');
var assert = require("assert");
var request = require('superagent');
var expect = require('expect.js');
var userwork = require('../dataaccess/userdao');


describe('addition', function () {
 it('should add 1+1 correctly', function (done) {
   var onePlusOne = 1 + 1;
   onePlusOne.should.equal(2);
   // must call done() so that mocha know that we are... done.
   // Useful for async tests.
   done();
 });
});
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4)); // 4 is not present in this array so indexOf returns -1
    })
  });
});
describe('server', function(){
  describe('express', function(){
    it('should run in port 8080', function(done){
    	request.get('http://localhost:8080/sample').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		expect(res.text).to.contain('sample');
		expect(res.text).to.equal('this is a sample!');
		done();
  	});
    })
  });
});

describe('sampleapps', function(){
  describe('getusers', function(){
    it('should return a collection greater than 0', function(done){
    	request.get('http://localhost:8080/getusers').end(function(res){
       		expect(res).to.exist;
		expect(res.status).to.equal(200);
		var jsonVar = JSON.parse(res.text);
		expect(jsonVar.length).to.be.above(0);
		done();
  	});
    })
  });
});


describe('sampleapps', function(){
  describe('post method', function(){
    it('should insert a record in database', function(done){
    	request.post('http://localhost:8080/insertuser').send('mydata={"username":"Ketaki Nandi","password":"1234","email":"ketakinandi@gmail.com"}').end(function(res){
		userwork.getSingleUser('ketakinandi@gmail.com',function (err, userString) {
	       		var jsonVar = JSON.parse(userString);
			var convertVar = JSON.parse(jsonVar);
			expect(convertVar.length).to.be(1);
			done();
		});
  	});
    })
  })
  after(function(){
    	userwork.removeUser('ketakinandi@gmail.com', function (err) {
		// Just removed this user if exists
	});
  })
});

describe('sampleapps', function(){
  describe('mongogetmethod', function(){
    it('the method should return value as string', function(done){
	userwork.getUser(function (err, userString) {
		var jsonVar = JSON.parse(userString);
		var convertVar = JSON.parse(jsonVar);
		expect(convertVar.length).to.be.above(0);
		done();	
	});
    })
  });
});

describe('sampleapps', function(){
  describe('mongogetmethod', function(){
    it('the method should return a single document as string', function(done){
	userwork.getSingleUser('titasde@gmail.com',function (err, userString) {
		var jsonVar = JSON.parse(userString);
		var convertVar = JSON.parse(jsonVar);
		expect(convertVar.length).to.be(1);
		done();	
	});
    })
  });
});


describe('sampleapps', function(){
  describe('mongoremovemethod', function(){
    it('the method should remove document from collection', function(done){
	userwork.removeUser('piyas.de@gmail.com', function (err) {
		userwork.getSingleUser('piyas.de@gmail.com',function (err, userString) {
			var jsonVar = JSON.parse(userString);
			var convertVar = JSON.parse(jsonVar);
			expect(convertVar.length).to.be(0);
			done();	
		});
	});
    })
  });
});


describe('sampleapps', function(){
  before(function(){
    	userwork.removeUser('piyas.de@gmail.com', function (err) {
		// Just removed this user if exists
	});
  })
  describe('mongoinsertmethod', function(){
    it('the method should add document to collection', function(done){
	userwork.insertUser('{"username":"Piyas De","password":"1234","email":"piyas.de@gmail.com"}', function (err) {
		userwork.getSingleUser('piyas.de@gmail.com',function (err, userString) {
			var jsonVar = JSON.parse(userString);
			var convertVar = JSON.parse(jsonVar);
			expect(convertVar.length).to.be(1);
			done();			
		});
	});
	
    })
  })
  after(function(){
    	userwork.removeUser('piyas.de@gmail.com', function (err) {
		// Just removed this user if exists
	});
  })
});



