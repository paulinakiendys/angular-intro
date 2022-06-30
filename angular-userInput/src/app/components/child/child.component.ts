import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  input: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  // handleChange(event: any) {
  //   this.input = event.target.value;
  // }

  // handleChange(event: KeyboardEvent) {
  //   this.input = (event.target as HTMLInputElement).value;
  // }

  handleChange(input: string) {
    this.input = input;
  }

}
