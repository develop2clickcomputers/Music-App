import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {HomePage} from "../home/home";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
  this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  singUp() {
    this.navCtrl.push(RegisterPage);
  }

  login() {
    this.navCtrl.setRoot(HomePage)
  }

  forgotPassword(){
    this.navCtrl.setRoot(ForgotPasswordPage);
  }

}
