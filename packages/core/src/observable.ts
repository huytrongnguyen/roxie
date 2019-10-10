export type Observer<T> = {
  next: (value: T) => void,
  error: (reason: any) => void,
  complete: () => void,
}

export class Observable<T> {
  protected subscriber: Observer<T>;
  trySubscribe() { }

  subscribe(next: (value: T) => void, error?: (reason: any) => void, complete?: () => void) {
    this.subscriber = { next, error, complete };
    this.trySubscribe();
  }
}

export class Subject<T> extends Observable<T> {
  private event: T;

  next = (value: T) => { this.event = value; this.subscriber.next(value); }
  error = (reason: any) => { this.subscriber && this.subscriber.error && this.subscriber.error(reason); }
  complete = () => { this.subscriber && this.subscriber.complete && this.subscriber.complete(); }

  trySubscribe() {
    if (this.event) {
      this.subscriber.next(this.event);
    }
  }
}