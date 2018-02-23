// var observable = Rx.Observable.create(function subscribe(observer) {
//   var id = setInterval(() => {
//     observer.next('hi')
//   }, 1000);
// });

// observable.subscribe(x => console.log(x));

// var observable = Rx.Observable.create(function subscribe(observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// });

// var observable = Rx.Observable.create(function subscribe(observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
//   observer.next(4); // Is not delivered because it would violate the contract
// });

// var observable = Rx.Observable.create(function subscribe(observer) {
//   try {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     throw new Error('MyError');
//     observer.complete();
//   } catch (err) {
//     observer.error(err); // delivers an error if it caught one
//   }
// });

// observable.subscribe(
//   x => console.log(x),
//   err => console.error(err)
// );

// var observable = Rx.Observable.create(function subscribe(observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// });

// var subscription = observable.subscribe(x => console.log(x));

// // Later:
// subscription.unsubscribe();

var observable = Rx.Observable.create(function subscribe(observer) {
  // Keep track of the interval resource
  var intervalID = setInterval(() => {
    observer.next('hi');
  }, 1000);

  // Provide a way of canceling and disposing the interval resource
  return function unsubscribe() {
    clearInterval(intervalID);
  };
});

var subscription = observable.subscribe(x => console.log(x));

// // Later:
// subscription.unsubscribe();

setTimeout(() => {
  // Later:
  subscription.unsubscribe();
}, 3000);

