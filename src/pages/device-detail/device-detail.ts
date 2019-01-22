import {Component} from '@angular/core';
import {MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {DeviceListMemoryPage} from "../device-list-memory/device-list-memory";
import {DeviceInfoFullDiscriptionPage} from "../device-info-full-discription/device-info-full-discription";
import {Http} from "@angular/http";

@Component({
  selector: 'page-device-detail',
  templateUrl: 'device-detail.html',
})
export class DeviceDetailPage {

  constructor(public http: Http, public platform: Platform, public menuCtrl: MenuController, public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(false);
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.setRoot(DeviceListMemoryPage);
    })
  }

  ionViewDidLoad() {

    this.http.post('',{

    })
      .map(res=>res.json())
      .subscribe(data => {

      })

  }

  selects() {
    this.navCtrl.setRoot(DeviceListMemoryPage);
  }

  Device_Dis(){
    this.navCtrl.setRoot(DeviceInfoFullDiscriptionPage);
  }
}
