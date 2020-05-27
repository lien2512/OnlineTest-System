import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  checked = false;
  listTest = [
    {
      id: 1,
      status: true
    },
    {
      id: 1,
      status: false
    },
    {
      id: 1,
      status: true
    },
    {
      id: 1,
      status: false
    },
    {
      id: 1,
      status: false
    },
    {
      id: 1,
      status: true
    },
    {
      id: 1,
      status: false
    },
    {
      id: 1,
      status: true
    },
    {
      id: 1,
      status: false
    },
    {
      id: 1,
      status: false
    },{
      id: 1,
      status: false
    },
    {
      id: 1,
      status: false
    },
  ]
  listQuestion = [{
    question: 'Hai phát biểu nào sau đây cho biết ý nghĩa của bao gói (encapsulation)? (1) Bao gói mô tả quan hệ giữa hai\n' +
      '              lớp con; (2) Các thao tác và thuộc tính được đưa vào trong cùng một đối tượng; (3) Bao gói cho phép thay đổi\n' +
      '              các thao tác (operations) và các thuộc tính thuộc phạm vi private của đối tượng; (4) Bao gói ngăn các đối\n' +
      '              tượng khác thay đổi các thuộc tính của một đối tượng.',
    ans: ['Đáp án 1', 'Đáp án 2', 'Đáp án 3']
  }];
  constructor() {
  }

  ngOnInit() {
  }

}
