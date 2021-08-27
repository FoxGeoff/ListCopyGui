import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Website {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  title = 'app-material2';

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      website: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  websites: Website[] = [
    { value: '1', viewValue: 'ItSolutionStuff.com' },
    { value: '2', viewValue: 'HDTuto.com' },
    { value: '3', viewValue: 'Nicesnippets.com' }
  ];

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
}
