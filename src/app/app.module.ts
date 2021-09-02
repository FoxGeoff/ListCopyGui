import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SelectBoxComponent } from './select-box/select-box.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AccountBuilderComponent } from './account-builder/account-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    SelectBoxComponent,
    ReactiveFormComponent,
    AccountBuilderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
