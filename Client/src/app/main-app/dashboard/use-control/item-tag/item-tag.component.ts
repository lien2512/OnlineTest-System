import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-tag',
  templateUrl: './item-tag.component.html',
  styleUrls: ['./item-tag.component.scss']
})
export class ItemTagComponent implements OnInit {

  @Input()
  Item: any;
  constructor() { }

  ngOnInit() {
  }

}
