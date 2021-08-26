import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


interface Website {

  value: string;

  viewValue: string;

}

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  firstFormGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(){
      this.firstFormGroup = this._formBuilder.group({
      expenses: ['', Validators.required],
      operatingAdjustments: ['',Validators.required],
      adjustments: ['', Validators.required],
      effectiveCap: ['', Validators.required],
      effectiveTime: ['', Validators.required],
      judgment: ['', Validators.required]
    });
  }
}
