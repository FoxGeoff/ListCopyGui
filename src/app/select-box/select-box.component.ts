import { Component, OnInit } from '@angular/core';

interface Website {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.css']
})
export class SelectBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'app-material3';

  websites: Website[] = [
    { value: '1', viewValue: 'ItSolutionStuff.com' },
    { value: '2', viewValue: 'HDTuto.com' },
    { value: '3', viewValue: 'Nicesnippets.com' }
  ];

}
