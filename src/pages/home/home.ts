import {Component} from '@angular/core';
import {MenuController, NavController} from 'ionic-angular';
import {MobileListPage} from "../mobile-list/mobile-list";
import {Http} from "@angular/http";
import {LoaderProvider} from "../../providers/loader/loader";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public loader: LoaderProvider, public http: Http, public menuCtrl: MenuController, public navCtrl: NavController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {


    this.loader.loading();

    setTimeout(() => {
      this.loader.dismiss()
    }, 2000);

    this.http.post('http://testjavaspringaapp.3vwnkptbzv.us-east-2.elasticbeanstalk.com/servlet/retrieveDeviceDetails', {
      merchantId: "9874",
      deviceId: "123456789"
    })
      .map(res => res.json())
      .subscribe(data => {

      })
  }


  MobileListPage() {
    this.navCtrl.setRoot(MobileListPage);
  }
}
