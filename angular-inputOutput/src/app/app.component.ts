import { Component, Input } from '@angular/core';
import { Animal } from './models/Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animals: Animal[] = [new Animal('Kitty', 2, "Cat", true), new Animal('Pluto', 5, "Dog", true), new Animal('Tweety', 10, "Bird", true)];
  hungryAnimals: number | undefined;

  feedAnimal(animal: Animal) {
    animal.isHungry = false;

    this.hungryAnimals = this.animals.filter(obj => obj.isHungry == true).length;
  }
}
