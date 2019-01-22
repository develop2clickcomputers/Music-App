import { Component } from '@angular/core';
import {MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {DeviceListMemoryPage} from "../device-list-memory/device-list-memory";
import {MobileListPage} from "../mobile-list/mobile-list";
import {Http} from "@angular/http";


@Component({
  selector: 'page-device-list',
  templateUrl: 'device-list.html',
})
export class DeviceListPage {

  constructor(public http: Http,public platform:Platform,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(false);
    this.platform.registerBackButtonAction(()=>{
      this.navCtrl.setRoot(MobileListPage);
    })
  }

  ionViewDidLoad() {

    this.http.post('',{

    })
      .map(res=>res.json())
      .subscribe(data => {

      })


  }


  devicememory(){
    this.navCtrl.setRoot(DeviceListMemoryPage);
  }

  selects(){
    this.navCtrl.setRoot(MobileListPage);
  }

}
