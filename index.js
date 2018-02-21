var button = document.querySelector('button');

// Normally register event
var count = 0;
button.addEventListener('click', () => console.log(`Clicked ${++count} times(normally event)`));

// RxJS
Rx.Observable.fromEvent(button, 'click')
  .scan(count => count + 1, 0)
  .subscribe(count => console.log(`Clicked ${count} times(RxJS)`));
