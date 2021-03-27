import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First Angular Project';
  name:string = 'Matthew Earlywine';
  itemList:string[] = ['Tour of Heroes', 'CLI Documentation', 'FanFiction.Net', 'item4'];
  rectangle = {
    length: 5,
    width: 6,
    area: function() {
       return this.length * this.width;
    }
 };
}
