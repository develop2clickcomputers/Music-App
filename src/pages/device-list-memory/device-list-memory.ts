import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {DeviceListPage} from "../device-list/device-list";
import {DeviceDetailPage} from "../device-detail/device-detail";
import {Http} from "@angular/http";


@Component({
  selector: 'page-device-list-menory',
  templateUrl: 'device-list-memory.html',
})
export class DeviceListMemoryPage {

  constructor(public http: Http,public platform:Platform,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(false);
    this.platform.registerBackButtonAction(()=>{
      this.navCtrl.setRoot(DeviceListPage);
    })
  }

  ionViewDidLoad() {

    this.http.post('',{

    })
      .map(res=>res.json())
      .subscribe(data => {

      })

  }

  selects(){
    this.navCtrl.setRoot(DeviceListPage);
  }

  deviceDetails(){
    this.navCtrl.setRoot(DeviceDetailPage);
  }

}
