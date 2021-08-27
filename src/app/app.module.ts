import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferFormComponent,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
