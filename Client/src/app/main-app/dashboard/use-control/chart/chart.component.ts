import { Component, OnInit } from '@angular/core';
import {Chart} from 'angular-highcharts';
// import { Options, DataPoint, ChartObject, SeriesObject } from 'highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Biểu đồ điểm thi thử môn Hoá học THPTQG'
    },
    credits: {
      enabled: false
    },
    series: [ {
      type: 'column',
      name: 'John',
      data: [5, 7, 3, 2, 9, 10]
    }]
  });
  constructor(
  ) { }

  ngOnInit() {
  }
}
