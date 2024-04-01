import { Injectable } from "@angular/core";
import { StoreObject } from "./models/store-object.model";
import { RxModel } from "./models/rx.model";
import { HttpClient } from "@angular/common/http";
import { combineLatest } from "rxjs";

@Injectable({ providedIn: "root" })
export class AppStore {
  public readonly medications: StoreObject<RxModel[]> = new StoreObject<RxModel[]>([]);
  public readonly selectedMedication: StoreObject<RxModel | undefined> = new StoreObject<RxModel | undefined>(undefined);

  private readonly selectedRxNumber: StoreObject<string> = new StoreObject<string>("");

  constructor(private _http: HttpClient) {
    combineLatest([this.medications.observable, this.selectedRxNumber.observable]).subscribe(([medications, selectedRxNumber]) => {
      this.selectedMedication.set(medications.find((med) => med.rxNumber === selectedRxNumber));
    });
  }

  addMedication() {
    let newRx = new RxModel();
    newRx.isNew = true;
    this.selectedMedication.set(newRx);
  }

  closeDialog() {
    this.selectedMedication.set(undefined);
  }

  loadMedications() {
    this._http.get<RxModel[]>("https://localhost:7160/api/medications").subscribe((medications) => {
      this.medications.set(medications);
    });
  }

  selectMedication(rxNumber: string) {
    this.selectedRxNumber.set(rxNumber);
  }

  save() {
    let medication = this.selectedMedication.get();

    if (medication?.isNew) {
      this._http.post("https://localhost:7160/api/medications", medication).subscribe(() => {
        this.loadMedications();
      });
    } else {
    }

    this.closeDialog();
  }
}
