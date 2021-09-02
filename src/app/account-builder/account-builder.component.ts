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

  //Customer form
  customerPick!: Customer;
  //Account form
  AccountPick!: Account;
  AccountContacts: Customer[] = [];
  areAccountDetails = true;

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
    const cust = this.formCustomer.controls.customer.value as Customer;
    console.log(cust);

    this.customerPick = {
      company: cust.company,
      address: cust.address,
      contact: cust.contact,
      notes: cust.notes,
      phone: cust.phone
    };
  }
  submitAccount() {
    if (this.formCustomer.touched) {
      console.log(this.formAccount.value);
    } else {
      console.log("New Account");
      this.accountLabel = "New Account";
    }
  }

  submitAccountCustomer() {
    if (this.areAccountDetails) {
      this.AccountPick = {
        company: this.customerPick.company,
        address: this.customerPick.address,
        phone: this.customerPick.address,
        notes: this.customerPick.notes,
        contacts: this.AccountContacts
      }
      this.areAccountDetails = false;
    }
    this.customerPick.company = this.AccountPick.company;
    this.AccountPick.contacts.push(this.customerPick);
    console.log(this.AccountPick);
  }
}

