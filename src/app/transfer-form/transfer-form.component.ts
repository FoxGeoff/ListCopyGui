import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../models/customer';


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

  customers: Customer[] = [
    {
      company: 'ItSolutionStuff.com',
      address: '123 Place',
      contact: 'Joe Blow',
      phone: '123-444-5737',
      notes: 'This is a very important customer account'
    } as Customer,
    {
      company: 'HDTuto.com',
      address: '24 Live St',
      contact: 'Jane Doe',
      phone: '100-445-8887',
      notes: 'Not important customer account'
    } as Customer,
    {
      company: 'Nicesnippets.com',
      address: '1 Square Ave',
      contact: 'Fred Frogger',
      phone: '619-453-2898',
      notes: 'Just another customer account'
    } as Customer,
  ];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      expenses: ['', Validators.required],
      operatingAdjustments: ['', Validators.required],
      adjustments: ['', Validators.required],
      effectiveCap: ['', Validators.required],
      effectiveTime: ['', Validators.required],
      judgment: ['', Validators.required]
    });
  }
}
