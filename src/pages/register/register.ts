import { Component } from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {
    this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {

  }

  signUp(){
    this.navCtrl.setRoot(HomePage);
  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }
}
