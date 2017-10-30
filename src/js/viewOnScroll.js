var $ = require('jquery');


// the callback function that will be fired
// when the element apears in the viewport
// because it fires on initialization
// we have to check for change.isIntersecting parameter
function onEntry(entry) {
  entry.forEach((change) => {
    if(change.isIntersecting) {
      change.target.classList.add('event__visible');
    } else if(change.isIntersecting) {
      change.target.classList.removeClass('event__visible');
    }
  });
}

// list of options
let options = {
  threshold: [0.2]
};
// instantiate a new Intersection Observer
let observer = new IntersectionObserver(onEntry, options);
// list of paragraphs
let elements = document.querySelectorAll('.event__item');

// loop through all elements
// pass each element to observe method
// ES2015 for-of loop can traverse through DOM Elements
for (let elm of elements) {
  observer.observe(elm);
}
