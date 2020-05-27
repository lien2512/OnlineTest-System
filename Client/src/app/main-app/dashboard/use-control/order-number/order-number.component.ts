import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-order-number',
  templateUrl: './order-number.component.html',
  styleUrls: ['./order-number.component.scss']
})
export class OrderNumberComponent implements OnInit {
  @Input() stt: any;
  constructor() { }

  ngOnInit() {
  }

}
