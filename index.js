// var observable = Rx.Observable.interval(1000);
// var subscription = observable.subscribe(x => console.log(x));
// // Later:
// // This cancels the ongoing Observable execution which
// // was started by calling subscribe with an Observer.
// subscription.unsubscribe();

var observable1 = Rx.Observable.interval(400);
var observable2 = Rx.Observable.interval(300);

var subscription = observable1.subscribe(x => console.log('first: ' + x));
var childSubscription = observable2.subscribe(x => console.log('second: ' + x));

subscription.add(childSubscription);

setTimeout(() => {
  // Unsubscribes BOTH subscription and childSubscription
  subscription.unsubscribe();
}, 1000);
