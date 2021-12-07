import { Component, OnInit } from '@angular/core';
import { API_CONSTANT } from 'src/app/constants/api.constants';
import { AlertList } from 'src/app/models/interfaces/alert-list.models';
import { HttpServicesService } from 'src/app/services/http-services.service';

@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent implements OnInit {
  alertList: AlertList[] = [];

  constructor(
    private httpService: HttpServicesService
  ) { }

  ngOnInit(): void {
    this.getAlertList();
  }

  getAlertList(): void {
    this.httpService.get(API_CONSTANT.ALERT_LIST).subscribe(res => {
      this.alertList = res;
    });
  }

}
