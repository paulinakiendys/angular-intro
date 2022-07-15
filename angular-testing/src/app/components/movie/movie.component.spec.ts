import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/Movie';

import { MovieComponent } from './movie.component';

describe('MovieComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHostComponent, MovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the title', () => {
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4')?.innerHTML).toBe('Star Wars');
  });
});

@Component({
  template: `<app-movie [movie]='dataToSendToUser'></app-movie>`
})
class TestHostComponent {
  dataToSendToUser: Movie = {Title: 'Star Wars', Year: '', imdbID: '', Poster: ''};
}