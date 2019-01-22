import { Component } from '@angular/core';
import {MenuController, NavController, NavParams, Platform} from 'ionic-angular';
import {LoginPage} from "../login/login";


@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  constructor(public platform:Platform,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
      this.menuCtrl.enable(false);
      this.platform.registerBackButtonAction(()=>{
        this.navCtrl.setRoot(LoginPage);
      })
  }

  ionViewDidLoad() {

  }

  backlogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  Forgot(){
    this.navCtrl.setRoot(ForgotPasswordPage);
  }

}
