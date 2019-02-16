import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-raw-data',
  templateUrl: './raw-data.component.html',
  styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {
  @Input('dataset') sampleUsers: any;

  constructor() { }

  ngOnInit() {
    console.log('sampleUsers', this.sampleUsers);
  }

}
