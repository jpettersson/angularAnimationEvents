(function() {

  var module = angular.module('angularAnimationEvents', []);

  module.constant("CAEEventList", [
    "webkit{{type}}End",
    "{{type | lowercase}}end",
    "o{{type}}End",
    "MS{{type}}End"
  ]);

  module.service("CAEListenerService", function($interpolate, CAEEventList) {
    this.observe = function(iElement, scope, eventFunc, eventType) {
      var subs = CAEEventList.map(function(a){
        var func = $interpolate(a);
        return func({type: eventType});
      });

      for(var i=0;i<subs.length;i++) {
        iElement[0].addEventListener(subs[i], function(evt) {
          var eventName = eventType.toLowerCase().concat('End');
          scope[eventFunc](eventName, evt);
        })
      }
    };
  });

  var types = ['Animation']; //'Transition' is not yet supported
  var methods = ['emit', 'broadcast'];

  angular.forEach(types, function(type) {
    angular.forEach(methods, function(method){
      module.directive(method.concat(type).concat("End"), function(CAEListenerService){
        return {
          restrict: 'A',
          link: function(scope, iElement, attrs) {
            CAEListenerService.observe(iElement, scope, "$".concat(method), type);
          }
        }
      });
    });
  });

})();