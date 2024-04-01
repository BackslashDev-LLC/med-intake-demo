import { BehaviorSubject, Observable } from "rxjs";

export class StoreObject<T> {
  private _subject: BehaviorSubject<T>;
  public readonly observable: Observable<T>;

  constructor(val: T) {
    this._subject = new BehaviorSubject<T>(val);
    this.observable = this._subject.asObservable();
  }

  get(): T {
    return this._subject.getValue();
  }

  set(val: T) {
    this._subject.next(val);
  }
}
