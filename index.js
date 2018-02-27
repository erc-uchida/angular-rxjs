var asyncSubject = new Rx.AsyncSubject();

asyncSubject.subscribe(
  value => console.log(value),
  err => console.log(err)
);

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);
asyncSubject.next(4);

// エラーが発生した場合は最後のnextには値が流れない
asyncSubject.next(5);
asyncSubject.error('error');
