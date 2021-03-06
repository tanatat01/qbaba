import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';

import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the NewbabaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newbaba',
  templateUrl: 'newbaba.html',
})
export class NewbabaPage {
  barbershop = {
    BabberID:"",
    BabberName:"",
    OwnerName:"",
    TelBarber:"",
    Address:"",
  };
  data : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http:HttpClient,private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbabaPage');
  }
  addbarber(){
    let url= "http://localhost:8080/barbershop";
    console.log(this.barbershop);
    this.http.post(url,this.barbershop)
      .subscribe(
        res=>{
          this.data =res;
          if(this.data.msg==true){
            this.showAlert("Success","Data added");
            this.navCtrl.popToRoot();
          }
        }
      );
    }
    //สร้าง Alert Message
    showAlert(msgTitle:string, message:string){
        const alert = this.alertCtrl.create({
          title: msgTitle,
          subTitle: message,
          buttons: ["OK"]
        });
        //show alert
        alert.present();
    }
}
