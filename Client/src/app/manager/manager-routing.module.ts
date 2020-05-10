import { ProfileComponent } from './profile/profile.component';
import { ManagerTestComponent } from './manager-test/manager-test.component';
import { ManagerComponent } from './manager.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManagerBankQuestionsComponent } from './manager-bank-questions/manager-bank-questions.component';
import { DashboardChannelComponent } from './dashboard-channel/dashboard-channel.component';


const routes: Routes = [
  {
    path: '',
    component: ManagerComponent,
    children: [
      {
        path: 'test',
        component: ManagerTestComponent
      },
      {
        path: 'bank-question',
        component: ManagerBankQuestionsComponent
      },
      {
        path: 'history-test',
        component: ProfileComponent
      },
      {
        path: 'dashboard',
        component: DashboardChannelComponent
      },
      // duong dan khac thi mac dinh ve home
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
