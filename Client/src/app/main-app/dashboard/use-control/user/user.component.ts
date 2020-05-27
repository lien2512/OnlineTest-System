import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  date = new Date();
  @Input()
  Item: any;
  constructor() { }

  ngOnInit() {
  }

}
