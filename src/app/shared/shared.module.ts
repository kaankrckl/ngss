import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent }  from './components/header/header.component';
import { FooterComponent }  from './components/footer/footer.component';
import { SidebarComponent }  from './components/sidebar/sidebar.component';

import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select'

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'








import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';

import { RouterModule } from '@angular/router';
import { AreaComponent } from './widgets/area/area.component';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { DatasComponent } from './components/datas/datas.component';
import { TweetComponent } from './widgets/tweet/tweet.component';
import { InfoCardComponent } from './widgets/info-card/info-card.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatChipsModule} from '@angular/material/chips';






@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    DatasComponent,
    TweetComponent,
    InfoCardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatSelectModule,
    MatChipsModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule ,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    DatasComponent,
    TweetComponent,
    InfoCardComponent,
    RegisterComponent,
    LoginComponent
  ]
})
export class SharedModule { }
