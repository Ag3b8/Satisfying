// alternative
// const bars = document.getElementById("loader-container").querySelectorAll("#loader-item");

// getting elements from main div into an object
const bars = document.getElementById("loader-container").children;
// set delay, 1000 being overall duration of animation
// & bars.length ammount of steps to divide it for
const time = 1.5 / bars.length;
let startTime = 0;

// define function
function loaderDelay() {
  // iterable loop that goes through the elements in the object
  for (let i = 0; i < bars.length; i++) {
    // adding the animation delay to each item
    bars[i].style.animationDelay = `${startTime}s`;
    // increasing delay by itself + 1 step
    startTime = startTime + time;
  }
}
// calling the function on load
window.onload = loaderDelay();
