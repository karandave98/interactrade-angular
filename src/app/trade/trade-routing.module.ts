import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertListComponent } from './alert-list/alert-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/alert-list',
    pathMatch: 'full'
  },
  {
    path: 'alert-list',
    component: AlertListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TradeRoutingModule { }
