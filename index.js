/** Function */
// function foo() {
//   console.log('Hello');
//   return 42;
// }

// var x = foo.call(); // same as foo()
// console.log(x);
// var y = foo.call(); // same as foo()
// console.log(y);

/** Observable */
// var foo = Rx.Observable.create(function (observer) {
//   console.log('Hello');
//   observer.next(42);
// });

// foo.subscribe(function (x) {
//   console.log(x);
// });
// foo.subscribe(function (y) {
//   console.log(y);
// });

/** Function sync call */
// function foo() {
//   console.log('Hello');
//   return 42;
// }

// console.log('before');
// console.log(foo.call());
// console.log('after');

/** Observable sync call */
// var foo = Rx.Observable.create(function (observer) {
//   console.log('Hello');
//   observer.next(42);
// });

// console.log('before');
// foo.subscribe(function (x) {
//   console.log(x);
// });
// console.log('after');

/** Function can't return multiple values over time */
// function foo() {
//   console.log('Hello');
//   return 42;
//   return 100; // dead code. will never happen
// }

// console.log('before');
// console.log(foo.call());
// console.log('after');

/** Observable can return multiple values over time */
// var foo = Rx.Observable.create(function (observer) {
//   console.log('Hello');
//   observer.next(42);
//   observer.next(100); // "return" another value
//   observer.next(200); // "return" yet another
// });

// console.log('before');
// foo.subscribe(function (x) {
//   console.log(x);
// });
// console.log('after');

/** But Observable can also return values asynchronously */
var foo = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
  observer.next(100);
  observer.next(200);
  setTimeout(() => {
    observer.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');
