describe("Unit: angularAnimationEvents module", function() {

  it("should be registered", function() {
    expect(angular.module('angularAnimationEvents')).toNotEqual(null);
  });

});

// describe('Unit, Service: CAEListenerService', function() {
//   var service, element, scope;
//   var template = '<div></div>';

//   var outerElement, innerElement, element, scope;

//   beforeEach(module('angularAnimationEvents'));

//   beforeEach(inject(function($injector, $compile, $rootScope){
//     scope = $rootScope;
//     element = angular.element(template);
//     $compile(element)(scope);
//     scope.$apply();

//     service = $injector.get('CAEListenerService');
//     service.observe(element, scope, '$emit', 'Animation');
//   }));

//   it('should add 4 events to the element', function() {
//     console.log(element);
//   });

// });

describe('E2E, Directive: emit-animation-end', function(){
  var template = '<div class="outer">' +
                   '<div class="the-element simple-animation" ' +
                     'ng-show="isVisible"' +
                     'emit-animation-end>' + 
                     '<div class="inner"></div>'
                   '</div>' +
                 '</div>';

  var outerElement, innerElement, element, scope;

  beforeEach(inject(function($parse, $compile, $rootScope){
    scope = $rootScope;

    outerElement = angular.element(template);
    $compile(outerElement)(scope);
    scope.$apply();

    innerElement = angular.element(outerElement[0].querySelector('.inner'));
    element = angular.element(outerElement[0].querySelector('.the-element'));
  }));

  it('should be invisible at start', function() {
    expect(element.hasClass('ng-hide')).toBe(true);
  });

  it('should $broadcast to child scope after animation', function() {
    spyOn(scope, "$emit");

    runs(function() {
      scope.$apply(function() {
        scope.isVisible = true;
      });
    });

    waitsFor(function() {
      scope.$emit('hello')
    }, "The animation should have finished", 500);

    runs(function() {
      expect(scope.$emit)
        .toHaveBeenCalledWith('hello');
    });
  });

  // it('should be visible after when isVisible=true', function() {
  //   scope.$apply(function() {
  //     scope.isVisible = true;
  //   });

  //   expect(element.hasClass('ng-hide')).toBe(false);
  // });

});