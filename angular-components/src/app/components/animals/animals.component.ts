import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [new Animal('Kitty', 2, "Cat", false), new Animal('Pluto', 5, "Dog", true), new Animal('Tweety', 10, "Bird", false)];

  constructor() { }

  ngOnInit(): void {
  }

}
