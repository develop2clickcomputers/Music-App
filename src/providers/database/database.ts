import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Platform} from "ionic-angular";

@Injectable()
export class DatabaseProvider {
  private isOpen: boolean;
  private UserDetails: any;

  constructor(private sqlite: SQLite,private platfotm:Platform,) {

    this.platfotm.ready().then(()=>{

      if(!this.isOpen){
        this.sqlite = new SQLite();
        this.sqlite.create({name:"data.db",location:"default"})
          .then((db:SQLiteObject)=>{

            //............. User Details .................

            db.executeSql('CREATE IF NOT EXISTS UserDetails (UserDetailsId INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, emailID TEXT, mobileNo TEXT, restApi Text)')
              .then(r=>{
                console.log("User Details Table Created Successfully")
              })
          })
      }
    })

  }

  //.............. User Details Inserted Successfully ..........

  InsertUserDataDatabase(username,password,emailId,mobileNo,restApi){
    return new Promise(()=>{
      this.sqlite.create({name:"data.db",location:"default"})
        .then((db:SQLiteObject)=>{
          return db.executeSql('INSERT INTO UserDetails (username,password,emailID,mobileNo,restApi) VALUES (?,?,?,?,?)',[username,password,emailId,mobileNo,restApi])
            .then(UserDataInserted=>{
              console.log("USER DETAILS INSERTED SUCCESSFULLY",JSON.stringify(UserDataInserted))
            })
            .catch(err=>{
              console.log("USER DETAILS INSERTED FAILURE",JSON.stringify(err));
            })
        })
    })
  }

  //.............. Getting Details In Database .................

  GettingUserDataInDatabase(){
    return new Promise((resolve,reject)=>{
      this.sqlite.create({name:"data.db",location:"default"})
        .then((db:SQLiteObject)=>{
          return db.executeSql('SELECT * FROM UserDetails')
            .then(userDetails=>{
              let dataArray=[];
              if(userDetails.rows.length>0){
                dataArray.push({
                  username: userDetails.rows.item(0).username,
                  password: userDetails.rows.item(0).password,
                  emailID: userDetails.rows.item(0).emailID,
                  mobileNo: userDetails.rows.item(0).mobileNo,
                  restApi: userDetails.rows.item(0).restApi,
                });
                this.UserDetails = dataArray;
              }else{
                this.UserDetails = '';
              }
              console.log("GETTING USER DETAILS FROM DATABASE",JSON.stringify(this.UserDetails));
              resolve(this.UserDetails);
            })
            .catch(err=>{
              console.log("GETTING USER DETAILS FROM DATABASE ERROR",JSON.stringify(err));
            })
        })
    })
  }

}
