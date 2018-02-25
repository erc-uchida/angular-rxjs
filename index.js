/** 
 * we take the usual simple Observable that emits values 1, 2, 3 synchronously, and use the operator observeOn to specify the async scheduler to use for delivering those values.
 */
// var observable = Rx.Observable.create(function (observer) {
//   observer.next(1);
//   observer.next(2);
//   observer.next(3);
//   observer.complete();
// })
// .observeOn(Rx.Scheduler.async);

// console.log('just before subscribe');
// observable.subscribe({
//   next: x => console.log('got value ' + x),
//   error: err => console.error('something wrong occurred: ' + err),
//   complete: () => console.log('done'),
// });
// console.log('just after subscribe');

var observable = Rx.Observable.create(function (proxyObserver) {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
})
.observeOn(Rx.Scheduler.async);

var finalObserver = {
  next: x => console.log('got value ' + x),
  error: err => console.error('something wrong occurred: ' + err),
  complete: () => console.log('done'),
};

console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');

/**
 * The proxyObserver is created in observeOn(Rx.Scheduler.async), and its next(val) function is approximately the following:

 var proxyObserver = {
  next: (val) => {
    Rx.Scheduler.async.schedule(
      (x) => finalObserver.next(x),
      0, // delay,
      val // will be the x for the function above
    );
  },

  // ...
}
 */
