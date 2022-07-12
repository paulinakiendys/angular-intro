import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.scss']
})
export class AddAnimalComponent implements OnInit {
  // name = new FormControl('');
  // type = new FormControl('');
  // description = new FormControl('');

  // animalForm = new FormGroup({
  //   name: new FormControl(''),
  //   type: new FormControl(''),
  //   description: new FormControl('')
  // })

  animalForm = this.fb.group({
    name: ['', Validators.required],
    type: [''],
    description: ['']
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
  }

  // changeName() {
  //   this.name.setValue('Paulina')
  // }

  onSubmit() {
    this.animalForm.value.name = 'Paulina'
  }
}
