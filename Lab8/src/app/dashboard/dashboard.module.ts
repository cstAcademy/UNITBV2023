import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [DashboardPageComponent, UserComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzCardModule,
    NzNotificationModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
  ],
})
export class DashboardModule {}
