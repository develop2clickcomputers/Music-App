import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DatabaseProvider} from '../providers/database/database';
import {DeviceDetailPage} from "../pages/device-detail/device-detail";
import {RegisterPage} from "../pages/register/register";
import {LoginPage} from "../pages/login/login";
import {HttpClientModule} from "@angular/common/http";
import {SupportPage} from "../pages/support/support";
import {SQLite} from '@ionic-native/sqlite';
import {HeaderColor} from "@ionic-native/header-color";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {MobileListPage} from "../pages/mobile-list/mobile-list";
import {DeviceInfoFullDiscriptionPage} from "../pages/device-info-full-discription/device-info-full-discription";
import {DeviceListPage} from "../pages/device-list/device-list";
import {DeviceListCurrentDesignPage} from "../pages/device-list-current-design/device-list-current-design";
import {DeviceListMemoryPage} from "../pages/device-list-memory/device-list-memory";
import {HttpModule} from "@angular/http";
import {SocialSharing} from "@ionic-native/social-sharing";
import { LoaderProvider } from '../providers/loader/loader';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SupportPage,
    RegisterPage,
    MobileListPage,
    DeviceListPage,
    DeviceDetailPage,
    ForgotPasswordPage,
    DeviceListMemoryPage,
    DeviceListCurrentDesignPage,
    DeviceInfoFullDiscriptionPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SupportPage,
    RegisterPage,
    MobileListPage,
    DeviceListPage,
    DeviceDetailPage,
    ForgotPasswordPage,
    DeviceListMemoryPage,
    DeviceListCurrentDesignPage,
    DeviceInfoFullDiscriptionPage
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    SocialSharing,
    HeaderColor,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    LoaderProvider
  ]
})
export class AppModule {
}
