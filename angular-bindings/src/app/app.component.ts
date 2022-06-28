import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  link: string = "https://via.placeholder.com/100";
  boxClass: string = "yellow-box";
  isHidden: boolean = false;
  toggleColor: boolean = false;

  handleClick() {
    this.toggleColor = !this.toggleColor;
  }
}
