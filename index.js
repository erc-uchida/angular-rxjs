var button = document.querySelector('button');

// Normally register event
button.addEventListener('click', () => console.log('Clicked!(normally event)'));

// RxJS
Rx.Observable.fromEvent(button, 'click')
  .subscribe(() => console.log('Clicked!(RxJS)'));
