import { Component, OnInit } from '@angular/core';
import {Test} from '../../models/test';
import {column} from '../../models/column';
import {EnumDataType} from '../../common/enum-common';
import {Router} from "@angular/router";
import {ViewTestComponent} from "../../manager/manager-test/bottomSheet/view-test/view-test.component";
import { MatTableDataSource, MatBottomSheet } from '@angular/material';
import {ResultComponent} from "../dashboard/use-control/result/result.component";

@Component({
  selector: 'app-history-test',
  templateUrl: './history-test.component.html',
  styleUrls: ['./history-test.component.scss']
})
export class HistoryTestComponent implements OnInit {
  date = new Date();
  lstTest: Test[] = [
    { id: 1, code: 'MS001', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true, },
    { id: 1, code: 'MS002', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0020', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0019', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0018', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0017', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0016', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0015', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0014', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0013', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0012', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0011', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS0010', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS009', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS008', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS007', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS006', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS005', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
    { id: 1, code: 'MS004', name: 'Hydrogen', datePublic: this.date, time: 90, status: 1, amount: 100, isPublic: true },
  ];

  totalPage = this.lstTest.length;

  displayedColumns: string[] = ['code', 'name', 'datePublic', 'time', 'amount'];

  dataSource = new MatTableDataSource<any>(this.lstTest);

  Columns: Array<column> = [
    {
      type: EnumDataType.selectBox,
      name: '',
      dataIndex: 'select',
    },
    {
      type: EnumDataType.default,
      name: 'Mã đề thi',
      dataIndex: 'code',
    },
    {
      type: EnumDataType.default,
      name: 'tên đề thi',
      dataIndex: 'name',
    },
    {
      type: EnumDataType.date,
      name: 'ngày thi',
      dataIndex: 'datePublic',
    },
    {
      type: EnumDataType.number,
      name: 'thời gian làm bài (phút)',
      dataIndex: 'time',
    },
    {
      type: EnumDataType.number,
      name: 'Điểm',
      dataIndex: 'amount',
    },

  ];
  dataSubj = [{
    id: 0,
    name: 'Toán học'
  },
    {
    id: 1,
      name: 'Văn học'
    }, {
    id: 2,
      name: 'Tiếng Anh'
    },
    {
      id: 3,
      name: 'Hoá học'
    },
    {
      id: 4,
      name: 'Vật lý'
    },
    {
      id: 5,
      name: 'Code'
    }];
  constructor(private route: Router, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }
  goToDetail() {
    this.route.navigate(['main/result']);
  }
  viewTest(element) {
    this._bottomSheet.open(ResultComponent,
      {
        data: {
          test: element
        }
      });
  }

}
