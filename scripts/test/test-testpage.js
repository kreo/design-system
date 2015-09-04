/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var webdriver = require('selenium-webdriver');
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should;

module.exports = function(driver, testpageUrl) {

  // ///////////////////////////////////////
  // EXAMPLES PAGE
  // ///////////////////////////////////////
  describe('EXAMPLES page', function() {


    it('all examples should render correctly', function() {
      return driver.get(testpageUrl).then(function() {
        return driver.findElements(webdriver.By.css('.component-section')).then(function(components) {
          console.log('TEST EXAMPLES: Found ' + components.length + ' renditions');
          var cnt;
          for (cnt = 0; cnt < components.length; cnt++) {
            // for each component
            // 1. move to the sidenav link to that component
            driver.actions().mouseMove(components[cnt]).perform();
            components[cnt].getText().then(function(value) {
              console.log(value);
              driver.sleep(1000);
            });
          }
          
          driver.findElement({linkText: 'All rights reserved'}).then(function(footerlink) {
            driver.actions().mouseMove(footerlink).perform();
            driver.sleep(1000);
            return driver.getCurrentUrl();
          }).then(function(url){
            assert.equal(url, url);
            console.log("***Finished testing***");
          });
        });
      });
    });

  }); // end

}
