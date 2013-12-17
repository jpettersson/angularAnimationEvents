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

  module.directive('emitAnimationEnd', function(CAEListenerService){
    return {
      restrict: 'A',
      link: function(scope, iElement, attrs) {
        CAEListenerService.observe(iElement, scope, '$emit', 'Animation');
      }
    }
  });

  module.directive('emitTransitionEnd', function(CAEListenerService){
    return {
      restrict: 'A',
      link: function(scope, iElement, attrs) {
        CAEListenerService.observe(iElement, scope, '$emit', 'Transition');
      }
    }
  });

  module.directive('broadcastAnimationEnd', function(CAEListenerService){
    return {
      restrict: 'A',
      link: function(scope, iElement, attrs) {
        CAEListenerService.observe(iElement, scope, '$broadcast', 'Animation');
      }
    }
  });

  module.directive('broadcastTransitionEnd', function(CAEListenerService){
    return {
      restrict: 'A',
      link: function(scope, iElement, attrs) {
        CAEListenerService.observe(iElement, scope, '$broadcast', 'Transition');
      }
    }
  });

})();