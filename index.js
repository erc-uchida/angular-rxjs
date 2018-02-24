/** Every Subject is an Observable. */
// var subject = new Rx.Subject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });
// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// subject.next(1);
// subject.next(2);

/** Every Subject is an Observer. */
var subject = new Rx.Subject();

subject.subscribe({
  next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
  next: (v) => console.log('observerB: ' + v)
});

var observable = Rx.Observable.from([1, 2, 3]);

observable.subscribe(subject); // You can subscribe providing a Subject
