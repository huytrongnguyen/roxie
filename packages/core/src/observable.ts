export type Observer<T> = {
  next: (value: T) => void,
  error: (reason: any) => void,
  complete: () => void,
}

export class Observable<T> {
  protected subcriber: Observer<T>;

  subscribe(next: (value: T) => void, error?: (reason: any) => void, complete?: () => void) {
    this.subcriber = { next, error, complete };
  }
}

export class Subject<T> extends Observable<T> {
  next = (value: T) => this.subcriber.next(value);
  error = (reason: any) => { this.subcriber && this.subcriber.error && this.subcriber.error(reason); }
  complete = () => { this.subcriber && this.subcriber.complete && this.subcriber.complete(); }
}