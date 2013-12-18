## angularAnimationEvents

Angular directive to emit/broadcast CSS3 animation events.<br />
That's it, super small. Not fancy.

## Install

```
bower install angularCssEvents
```

## Usage

This module contains two *attribute* directives: 

```
emit-animation-end
broadcast-animation-end
```

Put these directives as attributes onto an element that is handled by ngAnimate. It will then emit/broadcast the event "animationEnd" on the scope. Emit sends the event upwards in the scope heirarchy and Broadcast sends it downwards to the child scopes.

## Example

```html
<!-- The animatedEnd event will be emitted here -->

<my:feature>
  <div 
    class="simple-animation" 
    emit-animation-end 
    broadcast-animation-end>
    
    <!-- The 'animateEnd' event will be broadcasted here-->
    
  </div>
</my:feature>
```

```JavaScript

// Bind to the event like this

module.directive('myFeature', function() {
  return {
    restrict: 'E',
    link: function(scope, iElement, attrs) {
      scope.$on('animateEnd', function(evt) {
        console.log('Do something with the', evt);
      };
    }
  }
});

```

For a working example, check out [index.html](https://github.com/jpettersson/angularAnimationEvents/blob/master/test/e2e/app/index.html) in the e2e tests folder.

## Why?

I recently started using angular-animate together with animate.css. This great combo makes animations super easy. However, I ran into a problem when I needed to run a callback function after an animation finished (for different reasons, D3 viewport reszing, etc).

It's possible to define callback functions when defining JS animations directly on modules, but I've not been able to find how to do this when using the CSS class method.

I might have missed something obvious, please let me know! 

This solution is quite nice since it's not restricted to only working with ngAnimate, but can be used to detect any CSS3 animationEnd events. It was also great fun to set up the protractor tests to test CSS animations!

## Browser compatibility

So far it's been tested in: Chrome.

## Contribute

Feel free to contribute to this super small project. 

**To set up the testing environment:**

```
npm install .
bower install
grunt setup
```

**To run the unit tests (karma):**
```
grunt karma:watch
```

**To run both unit tests and e2e tests (protractor):**
```
grunt test
```
