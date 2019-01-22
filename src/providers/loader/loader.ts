import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoadingController} from "ionic-angular";


@Injectable()
export class LoaderProvider {

  public load: any;
  constructor(public loader: LoadingController, public http: HttpClient) {

  }


  loading(){

    return new Promise(()=>{
       this.load = this.loader.create({
        content:"Please Wait"
      });
      this.load.present()
    })

  }

  dismiss(){

    this.load.dismiss()
  }
}
