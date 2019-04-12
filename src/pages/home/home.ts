import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http }from '@angular/http';
import 'rxjs/add/operator/map'; 
import {  DetailPage } from '../detail/detail';
import { NewbabaPage } from '../newbaba/newbaba';
import { AlertController } from 'ionic-angular';
import { EditdataPage } from '../editdata/editdata';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  barbershop:any=0;
  data : any;
    constructor(public navCtrl: NavController, public navParam: NavParams, public http:Http, private alertCtrl:AlertController) {
    this.getData();
  }
  editdata(id){
    this.navCtrl.push( EditdataPage,{barberid: id});
    
  }
showDetail(id){
    this.navCtrl.push( DetailPage,{barberid: id});
     }

  newbarber()
  {
    this.navCtrl.push(NewbabaPage);
  }  
getData(){
  this.http.get('http://localhost:8080/barbershop')
      .map(res=>res.json()).subscribe(data=>{this.barbershop=data;});
}
deletedata(BabberID){
  this.alertCtrl.create({
    title:"Confirm", subTitle:"Confirm delete",buttons:[
      { 
        text: "Yes",
        handler:()=>{
          let url ="http://localhost:8080/barbershop/"+BabberID;
          this.http.delete(url)
            .subscribe(res=>{
              this.data=res;
              console.log(this.data);
                this.showAlert("Success", "Data deleted");
                this.getData();
            }); 
        }
      },
      {
        text: "No",
        handler:()=>{}
      }
    ]
  })
    .present();
 
}

showAlert(msgTitle:string, message:string){
  const alert = this.alertCtrl.create({
    title: msgTitle,
    subTitle: message,
    buttons: ["OK"]
  });
  //show alert
  alert.present();
}
ionViewWillEnter(){
  this.getData();
}

}

