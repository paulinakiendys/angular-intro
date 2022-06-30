import { Component, Input, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-print-animal',
  templateUrl: './print-animal.component.html',
  styleUrls: ['./print-animal.component.scss']
})
export class PrintAnimalComponent implements OnInit {

  @Input() animal: Animal = new Animal('', 0, '', false);

  constructor() { }

  ngOnInit(): void {
  }

}
