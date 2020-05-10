import { TestPageComponent } from './test-page/test-page.component';
import { TestComponent } from './dashboard/use-control/test/test.component';
import { SearchComponent } from './search/search.component';
import { MainAppComponent } from './main-app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HistoryTestComponent } from './history-test/history-test.component';
import { PersonalChannelComponent } from './personal-channel/personal-channel.component';
import {HightlightchanelComponent} from './hightlightchanel/hightlightchanel.component';
import {ItemTagComponent} from "./dashboard/use-control/item-tag/item-tag.component";
import {ResultComponent} from "./dashboard/use-control/result/result.component";

const routes: Routes = [
  {
    path: '',
    component: MainAppComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'history-test',
        component: HistoryTestComponent
      },
      {
        path: 'personal-channel',
        component: PersonalChannelComponent
      },
      {
        path: 'notify',
        component: DashboardComponent
      },
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'channel/:id',
        component: HightlightchanelComponent
      },
      {
        path: 'test/:id',
        component: TestPageComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
      // duong dan khac thi mac dinh ve home
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAppRoutingModule { }
