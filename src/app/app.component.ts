import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {SupportPage} from "../pages/support/support";
import { HeaderColor } from '@ionic-native/header-color';
import {LoginPage} from "../pages/login/login";
import {RegisterPage} from "../pages/register/register";
import {DeviceDetailPage} from "../pages/device-detail/device-detail";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;
  pages:any;

  constructor(private headerColor: HeaderColor,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = {
      HomePage: HomePage,
      SupportPage: SupportPage,
    };

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByHexString('#06c2b0');
      this.headerColor.tint('#06c2b0');
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
