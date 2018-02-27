var observable = Rx.Observable.create(observer => {
  observer.next(1);
  setTimeout(() => {
    observer.next(2);
    observer.complete();
  }, 1000);
});

var subscription = observable.subscribe(
  value => {
    console.log(value);
    if (value === 1) {
      setTimeout(() => {
        // ここでunsubscribeしても、Observableが値を流したあとなら、その値は流れてくる
        subscription.unsubscribe();
      }, 2000);
    }
  },
  err => console.log(err),
  () => console.log('complete')
);

