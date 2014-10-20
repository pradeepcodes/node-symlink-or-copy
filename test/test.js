var assert = require("assert");
var fs = require("fs");
var path = require("path");

describe('link check', function(){
  describe('link existing', function(){
    it('should return success when file exists is linked', function(){
        fs.linkSync("test/file1","test/alias1");
    })
  })
})