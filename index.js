/**
 * What are operators?
 *
 * An Operator is a function which creates a new Observable based on the current Observable. This is a pure operation: the previous Observable stays unmodified.
 */
// function multiplyByTen(input) {
//   var output = Rx.Observable.create(function subscribe(observer) {
//     input.subscribe({
//       next: (v) => observer.next(10 * v),
//       error: (err) => observer.error(err),
//       complete: () => observer.complete()
//     });
//   });
//   return output;
// }

// var input = Rx.Observable.from([1, 2, 3, 4]);
// var output = multiplyByTen(input);
// output.subscribe(x => console.log(x));

/**
 * Instance operators versus static operators
 *
 * Instance operators are functions that use the this keyword to infer what is the input Observable.
 */
// Rx.Observable.prototype.multiplyByTen = function multiplyByTen() {
//   var input = this;
//   return Rx.Observable.create(function subscribe(observer) {
//     input.subscribe({
//       next: (v) => observer.next(10 * v),
//       error: (err) => observer.error(err),
//       complete: () => observer.complete()
//     });
//   });
// }

// var observable = Rx.Observable.from([1, 2, 3, 4]).multiplyByTen();

// observable.subscribe(x => console.log(x));

/** Static operators are pure functions attached to the Observable class, and usually are used to create Observables from scratch. */
// var observable = Rx.Observable.interval(1000 /* number of milliseconds */);

// Some Combination Operators may be static
var observable1 = Rx.Observable.interval(1000);
var observable2 = Rx.Observable.interval(400);

var merged = Rx.Observable.merge(observable1, observable2);
