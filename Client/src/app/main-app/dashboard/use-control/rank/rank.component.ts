import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss']
})
export class RankComponent implements OnInit {
  date = new Date();
  listUser = [{
      name: 'Nguyen Van A',
      rank: '1',
      grade : 10
    },
      {
        name: 'Nguyen Văn Anh',
        rank: '2',
        grade : 9.5
      },
      {
        name: 'Nguyen Văn B',
        rank: '3',
        grade : 9
      },
      {
        name: 'Nguyen Văn C',
        rank: '4',
        grade : 9
      },{
        name: 'Nguyen Văn D',
        rank: '5',
        grade : 8.5
      },{
        name: 'Nguyen Văn B',
        rank: '6',
        grade : 8
      },
    ];
  constructor() { }

  ngOnInit() {
  }

}
