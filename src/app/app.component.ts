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
  title = 'users-list';
  //messages: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  messages: Section[] = [
    {
      from: 'User1',
      subject: 'subject1',
      content: 'content1',
    },
    {
      from: 'User2',
      subject: 'subject2',
      content: 'content2',
    },
    {
      from: 'User3',
      subject: 'subject3',
      content: 'content3',
    }
  ];
}
