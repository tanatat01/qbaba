import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


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
  barbarshop = {
    BarberID:"",
    BarberName:"",
    OwnerName:"",
    TelBarber:"",
    Address:"",
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewbabaPage');
  }
  addbarber(){
    let url="http://localhost:8080/barbershop";

    this.http.post(url,this.addbarber,{})
    .then(data=>{console.log(data.data.msg)});
  }
}
