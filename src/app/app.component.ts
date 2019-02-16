import { Component } from '@angular/core';
import { MbgbSampleComponent } from './mbgb-sample/mbgb-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-ripe';
  dateObject = Date;
  inputText: number = 1000;
  testNumberArray = [1, 2, 3, 79, 108, 100099, -16, 70000, 43.1206];
  testObjectArray = [
    {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 5,
        f: {
          g: 6,
          h: 7
        }
      }
    },
    {
      a: 8,
      b: 9,
      c: {
        d: 10,
        e: 11,
        f: {
          g: 12,
          h: 13
        }
      }
    },
    {
      a: 0,
      b: -1,
      c: {
        d: -2,
        e: -3,
        f: {
          g: -4,
          h: -5
        }
      }
    }
  ];

  testObjectArrayTwo = [
    {
      project: "project 1",
      projectManager: {
        firstName: "Billy",
        lastName: "Borman"
      },
      projectId: 124,
      projectDue: '1/6/2013',
      projectComplete: false
    },
    {
      project: "project 2",
      projectManager: {
        firstName: "Sally",
        lastName: "Avery"
      },
      projectId: 123,
      projectDue: '12/1/2013',
      projectComplete: true
    },
    {
      project: "project 3",
      projectManager: {
        firstName: "Donald",
        lastName: "Duck"
      },
      projectId: 126,
      projectDue: '1/1/2013',
      projectComplete: true
    },
    {
      project: "project 4",
      projectManager: {
        firstName: "Xavier",
        lastName: "Smith"
      },
      projectId: 125,
      projectDue: '1/1/2015',
      projectComplete: false
    },

  ];




  
}
