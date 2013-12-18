var path = require('path');
var versions = require( path.join(__dirname, '../node_modules/protractor/package.json') ).webdriverVersions;

exports.config = {
  seleniumServerJar: path.join(__dirname, '../node_modules/protractor/selenium/selenium-server-standalone-' + versions.selenium + '.jar'),

  chromeDriver: '../node_modules/protractor/selenium/chromedriver',

  allScriptsTimeout: 11000,

  specs: [
    'e2e/*Spec.js',
  ],

  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  capabilities: {
    'browserName': 'chrome'
  },


  baseUrl: 'http://localhost:8000',
  rootElement: 'body',
  
  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: false,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }
};