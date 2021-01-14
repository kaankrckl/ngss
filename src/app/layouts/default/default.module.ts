import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { PostsComponent } from '../../modules/posts/posts.component';
import { UsersComponent } from '../../modules/users/users.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatFormFieldModule,
    FlexLayoutModule
  ]
})
export class DefaultModule { }
