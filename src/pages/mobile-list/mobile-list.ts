import { Component } from '@angular/core';
import {MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {DeviceListMemoryPage} from "../device-list-memory/device-list-memory";
import {DeviceListPage} from "../device-list/device-list";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-mobile-list',
  templateUrl: 'mobile-list.html',
})
export class MobileListPage {
  private datas: any;

  constructor(public http: Http,public platform:Platform,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(false);
    this.platform.registerBackButtonAction(()=>{
      this.navCtrl.setRoot(HomePage);
    })
  }

  ionViewDidLoad() {

    this.http.post('',{

    })
      .map(res=>res.json())
      .subscribe(data => {

    })
  }

  deviceListMemory(){
    this.navCtrl.setRoot(DeviceListPage);
  }

  selects(){
    this.navCtrl.setRoot(HomePage);
  }

}
