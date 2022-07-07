import { Injectable } from '@angular/core';
import { Animal } from '../models/Animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  animals: Animal[] = [new Animal('Kitty', 3), new Animal('Pluto', 13), new Animal('Garfield', 52)]

  constructor() { }

  getAnimals(): Animal[] {
    return this.animals;
  }
}
