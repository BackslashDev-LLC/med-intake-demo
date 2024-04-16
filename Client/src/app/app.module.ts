import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { MedListComponent } from "./med-list/med-list.component";
import { MedEntryComponent } from "./med-entry/med-entry.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StyleClassModule } from "primeng/styleclass";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { AvatarModule } from "primeng/avatar";
import { AvatarGroupModule } from "primeng/avatargroup";
import { InputSwitchModule } from "primeng/inputswitch";
import { StoreObjectPipe } from "./pipes/store.pipe";
import { HttpClientModule } from "@angular/common/http";
import { DialogModule } from "primeng/dialog";
import { InputNumberModule } from "primeng/inputnumber";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FileUploadModule } from "primeng/fileupload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StyleClassModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    InputSwitchModule,
    HttpClientModule,
    DialogModule,
    InputNumberModule,
    CheckboxModule,
    InputTextareaModule,
    FileUploadModule,
  ],
  declarations: [AppComponent, MedListComponent, MedEntryComponent, StoreObjectPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
