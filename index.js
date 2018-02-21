var button = document.querySelector('button');

// Normally register event
var count = 0;
var rate = 1000;
var lastClick = Date.now() - rate;
button.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times(normally event)`);
    lastClick = Date.now();
  }
});

// RxJS
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times(RxJS)`));
