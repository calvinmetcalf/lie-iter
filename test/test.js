'use strict';
var iter = require('../lib/iter');
require("mocha-as-promised")();
var chai = require("chai");
chai.should();
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
var resolve = require('lie-resolve');
var reject = require('lie-reject');
var cast = require('lie-cast');
var Promise = require('lie');
function async(time, value){
  return new Promise(function(yes){
    setTimeout(function(){
      yes(value);
    },time)
  });
}
describe("iter",function(){
    it('should work with some promises',function(){
        return iter(cast([resolve(1),resolve(2),resolve(3)])).should.become([1,2,3]);
    });
    it('should work with some mixed stuff',function(){
        return iter(cast([resolve(1),2,resolve(3)])).should.become([1,2,3]);
    });
    it('should work async stuff',function(){
        return iter(cast([async(100,1),async(5,2),async(40,3)])).should.become([1,2,3]);
    });
    it('should work async failure',function(){
        return iter(cast([async(100,1),reject(2),async(40,3)])).should.be.rejected;
    });
});