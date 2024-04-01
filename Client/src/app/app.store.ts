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
    this.selectedMedication.set(new RxModel());
  }

  closeDialog() {
    this.selectedMedication.set(undefined);
  }

  loadMedications() {
    this.medications.set([
      {
        drugName: "Amoxicillin",
        strength: "500mg",
        quantity: "30 capsules",
        directions: "Take one capsule three times a day for 10 days",
        refills: 1,
        prescriber: "Dr. John Smith",
        rxNumber: "RX123456",
      },
      {
        drugName: "Lisinopril",
        strength: "10mg",
        quantity: "30 tablets",
        directions: "Take one tablet daily",
        refills: 2,
        prescriber: "Dr. Emily Davis",
        rxNumber: "RX234567",
      },
      {
        drugName: "Metformin",
        strength: "500mg",
        quantity: "60 tablets",
        directions: "Take one tablet twice a day with meals",
        refills: 3,
        prescriber: "Dr. Alan Grant",
        rxNumber: "RX345678",
      },
      {
        drugName: "Simvastatin",
        strength: "20mg",
        quantity: "30 tablets",
        directions: "Take one tablet at night",
        refills: 0,
        prescriber: "Dr. Jane Doe",
        rxNumber: "RX456789",
      },
      {
        drugName: "Levothyroxine",
        strength: "50mcg",
        quantity: "30 tablets",
        directions: "Take one tablet daily in the morning on an empty stomach",
        refills: 2,
        prescriber: "Dr. Chris Taylor",
        rxNumber: "RX567890",
      },
      {
        drugName: "Amlodipine",
        strength: "5mg",
        quantity: "30 tablets",
        directions: "Take one tablet daily",
        refills: 1,
        prescriber: "Dr. Laura Palmer",
        rxNumber: "RX678901",
      },
      {
        drugName: "Albuterol",
        strength: "90mcg/inhalation",
        quantity: "1 inhaler",
        directions: "Inhale two puffs every 4 to 6 hours as needed for wheezing",
        refills: 5,
        prescriber: "Dr. Kyle Broflovski",
        rxNumber: "RX789012",
      },
      {
        drugName: "Omeprazole",
        strength: "20mg",
        quantity: "30 capsules",
        directions: "Take one capsule daily before a meal",
        refills: 0,
        prescriber: "Dr. Eric Cartman",
        rxNumber: "RX890123",
      },
      {
        drugName: "Sertraline",
        strength: "50mg",
        quantity: "30 tablets",
        directions: "Take one tablet daily with or without food",
        refills: 3,
        prescriber: "Dr. Stan Marsh",
        rxNumber: "RX901234",
      },
      {
        drugName: "Losartan",
        strength: "50mg",
        quantity: "30 tablets",
        directions: "Take one tablet daily",
        refills: 2,
        prescriber: "Dr. Kenny McCormick",
        rxNumber: "RX012345",
      },
    ]);
  }

  selectMedication(rxNumber: string) {
    this.selectedRxNumber.set(rxNumber);
  }

  save() {
    console.log(this.selectedMedication.get());
    this.closeDialog();
  }
}
