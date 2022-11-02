import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DeleteMe2';
  items = ["apples", "bananas", "citrone"]
  str: string = "";
  activateDarkMode: boolean = false;

  handleClick() {
    this.str = "aaaaahoj";
    this.activateDarkMode = !this.activateDarkMode;
    console.log(this.activateDarkMode);
  }
}
