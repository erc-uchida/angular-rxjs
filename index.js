var observable = Rx.Observable.create(function subscribe(observer) {
  try {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
  } catch (err) {
    observer.error(err); // delivers an error if it caught one
  }
});

// var observer = {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };

// var observer = {
//   next: x => console.log('Observer got a next value: ' + x),
//   error: err => console.error('Observer got an error: ' + err),
// };

// observable.subscribe(observer);

// observable.subscribe(x => console.log('Observer got a next value: ' + x));

observable.subscribe(
  x => console.log('Observer got a next value: ' + x),
  err => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
