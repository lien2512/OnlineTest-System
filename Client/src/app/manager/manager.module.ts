import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerTestComponent } from './manager-test/manager-test.component';
import { ManagerBankQuestionsComponent } from './manager-bank-questions/manager-bank-questions.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardChannelComponent } from './dashboard-channel/dashboard-channel.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { FormsModule } from '@angular/forms';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';



@NgModule({
  declarations: [
    ManagerComponent,
    ManagerTestComponent,
    ManagerBankQuestionsComponent,
    ProfileComponent,
    DashboardChannelComponent
  ],
  imports: [
    CustomMaterialModule,
    FormsModule,
    CommonModule,
    ManagerRoutingModule
  ],
  providers: [],
  bootstrap: [ManagerComponent]
})
export class ManagerModule { }
