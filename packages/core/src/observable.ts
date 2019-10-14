export interface Observer<T> {
  next: (value: T) => void,
  error: (reason: any) => void,
  complete: () => void,
}

export class Observable<T> {
  protected subscriber: Observer<T>;

  subscribe(next: (value: T) => void, error?: (reason: any) => void, complete?: () => void) {
    this.subscriber = { next, error, complete };
  }
}

export class Subject<T> implements Observer<T> {
  private observers: Observer<T>[] = [];
  private _value: T;

  subscribe(next: (value: T) => void, error?: (reason: any) => void, complete?: () => void) {
    const subscriber = { next, error, complete };
    this.observers.push(subscriber);
    if (this._value) {
      subscriber.next(this._value);
    }
  }

  next = (value: T) => {
    this._value = value;
    this.observers.forEach(observer => observer.next && observer.next(value));
  }

  error = (reason: any) => {
    this.observers.forEach(observer => observer.error && observer.error(reason));
  }

  complete = () => {
    this.observers.forEach(observer => observer.error && observer.complete());
  }
}