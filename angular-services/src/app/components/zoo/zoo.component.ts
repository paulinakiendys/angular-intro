import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.scss']
})
export class ZooComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private service: AnimalService) { }

  ngOnInit(): void {
    this.animals = this.service.getAnimals();
  }

}
