describe('E2E: Testing animation callbacks', function() {
  var ptor;

  beforeEach(function() {
    ptor = protractor.getInstance();
  });

  it('should broadcast and emit animationEnd events', function() {
    browser.get('/');
    var result;

    var result = ptor.executeAsyncScript(function() {
      var callback = arguments[arguments.length - 1];

      setTimeout(function() {
        callback(window.testResults);
      }, 1000);
    });

    result.then(function(value) {
      console.log(value);
      expect(value.features).toEqual(2);
      expect(value.confirmedBroadcasts + value.confirmedEmissions).toEqual(2);
    });

  });
});