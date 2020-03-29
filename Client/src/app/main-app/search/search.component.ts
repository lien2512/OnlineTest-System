import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  listTitles: Array<any> = [
    {
      title: 'Code',
      imageUrl: '/assets/Image/chu_de/code.svg',
      color: '#994d4d'
    },
    {
      title: 'Vật lý',
      imageUrl: '/assets/Image/chu_de/vatly.svg',
      color: '#2f5256'
    },
    {
      title: 'Test IQ',
      imageUrl: '/assets/Image/chu_de/testiq.svg',
      color: '#22264b'
    },
    {
      title: 'Sinh học',
      imageUrl: '/assets/Image/chu_de/sinhhoc.svg',
      color: '#e6cf8b'
    },
    {
      title: 'Toán',
      imageUrl: '/assets/Image/chu_de/math.svg',
      color: '#3e4530'
    },
    {
      title: 'Lịch sử',
      imageUrl: '/assets/Image/chu_de/history.svg',
      color: '#95c4d7'
    },
    {
      title: 'địa lý',
      imageUrl: '/assets/Image/chu_de/geo.svg',
      color: '#bd7878'
    },
    {
      title: 'Ielts',
      imageUrl: '/assets/Image/chu_de/ielts.svg',
      color: '#bd7878'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
