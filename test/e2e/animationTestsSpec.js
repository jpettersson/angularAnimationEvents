describe('E2E: Testing animation callbacks', function() {
  it('should greet the named user', function() {
    browser.get('http://');

    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });
});