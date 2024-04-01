import { Pipe, PipeTransform, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { StoreObject } from "../models/store-object.model";

@Pipe({ name: "store", pure: false })
export class StoreObjectPipe implements PipeTransform, OnDestroy {
  private $destroyed: Subject<void> = new Subject<void>();
  private $subscription?: Subscription;

  private _latest: any;
  private _latestReturned: any;

  constructor(private _ref: ChangeDetectorRef) {}

  transform(value: StoreObject<any>) {
    if (!this.$subscription) {
      this.$subscription = value.observable.pipe(takeUntil(this.$destroyed)).subscribe((result: any) => {
        this._latest = result;
        this._ref.markForCheck();
      });

      this._latestReturned = this._latest;
      return this._latest;
    }

    if (this.areEqual(this._latest, this._latestReturned)) {
      return this._latestReturned;
    }

    this._latestReturned = this._latest;
    return this._latest;
  }

  private areEqual(a: any, b: any): boolean {
    return a === b || (typeof a === "number" && typeof b === "number" && isNaN(a) && isNaN(b));
  }

  ngOnDestroy() {
    this.$destroyed.next();
    this.$destroyed.unsubscribe();
  }
}
