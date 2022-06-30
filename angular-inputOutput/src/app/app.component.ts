import { Component } from '@angular/core';
import { Animal } from './models/Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  animals: Animal[] = [new Animal('Kitty', 2, "Cat", false), new Animal('Pluto', 5, "Dog", true), new Animal('Tweety', 10, "Bird", false)];
}
