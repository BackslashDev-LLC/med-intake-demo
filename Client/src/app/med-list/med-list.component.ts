import { AfterViewInit, Component } from "@angular/core";
import { AppStore } from "../app.store";
import { RxModel } from "../models/rx.model";

@Component({
  selector: "app-med-list",
  templateUrl: "./med-list.template.html",
  styleUrls: ["./med-list.styles.scss"],
})
export class MedListComponent implements AfterViewInit {
  displayDialog: boolean = false;
  medication: RxModel = new RxModel();

  constructor(public store: AppStore) {}

  ngAfterViewInit(): void {
    this.store.loadMedications();
  }

  onDialogChange(event: boolean) {
    if (!event) {
      this.store.closeDialog();
    }
  }

  onUpload(event: any) {
    let body = event.originalEvent.body;
    console.log(body);
    this.store.addMedicationFromLabel(body);
  }
}
