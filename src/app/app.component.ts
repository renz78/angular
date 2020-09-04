import { Component } from '@angular/core';

export interface Section {
  from: string;
  subject: string;
  content: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список пользователей';
  //messages: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  
}