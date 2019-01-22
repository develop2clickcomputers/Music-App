import {Component} from '@angular/core';
import {NavController, NavParams, Platform} from 'ionic-angular';
import {DeviceDetailPage} from "../device-detail/device-detail";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Http} from "@angular/http";

@Component({
  selector: 'page-device-info-full-discription',
  templateUrl: 'device-info-full-discription.html',
})
export class DeviceInfoFullDiscriptionPage {

  constructor(public http: Http, private socialSharing: SocialSharing,public platform:Platform, public navCtrl: NavController, public navParams: NavParams) {

    this.platform.registerBackButtonAction(()=>{
      this.navCtrl.setRoot(DeviceDetailPage);
    })

  }

  ionViewDidLoad() {

    this.http.post('',{

    })
      .map(res=>res.json())
      .subscribe(data => {

      })


  }

  buy_Now(){

    this.socialSharing.shareViaWhatsAppToReceiver('+919600103947',"Hi Bava Checking",'assets/imgs/icon.png',null).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      // Sharing via email is not possible
    });

  }

  selects(){
    this.navCtrl.setRoot(DeviceDetailPage);
  }

}
