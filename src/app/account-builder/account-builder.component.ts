import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../models/account';
import { Customer } from './../models/customer';

@Component({
  selector: 'app-account-builder',
  templateUrl: './account-builder.component.html',
  styleUrls: ['./account-builder.component.css']
})

export class AccountBuilderComponent implements OnInit {
  formCustomer: FormGroup = new FormGroup({});
  formAccount: FormGroup = new FormGroup({});
  accountTitle = "Select an account";
  accountLabel = "Select Account";

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

  Accounts: Account[] = [];

  constructor(private fb: FormBuilder) {

    this.formCustomer = fb.group({
      customer: ['', [Validators.required]],
    });
    this.formAccount = fb.group({
      account: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  get f() {
    return this.formCustomer.controls;
  }

  submitCustomer() {
    if (!this.formCustomer.untouched) {
      console.log(this.formCustomer.value);
    }
  }
  submitAccount() {
    if (this.formCustomer.touched) {
      console.log(this.formAccount.value);
    } else {
      console.log("New Account");
      this.accountLabel = "New Account";
    }
  }
}
