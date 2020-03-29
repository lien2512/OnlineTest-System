import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  listUrl: string[] = [
    '/main/dashboard',
    '/main/search',
    '/main/channel',
    '/main/notify',
    '/main/personal-channel',
    '/main/home',
    '/main/history-test'
  ];
  selectedPage: number = null;
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    const me = this;
    this.selectedPage = this.listUrl.indexOf(me.route.url) + 1;
  }

  // chạy tới trang trên menu
  redirectTo(page) {
    const me = this;
    me.selectedPage = page;
    me.route.navigate([me.listUrl[page - 1]]);
  }

}
