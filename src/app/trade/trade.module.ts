import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TradeRoutingModule } from './trade-routing.module';
import { AlertListComponent } from './alert-list/alert-list.component';


@NgModule({
  declarations: [
    AlertListComponent
  ],
  imports: [
    CommonModule,
    TradeRoutingModule,
    HttpClientModule
  ]
})
export class TradeModule { }
