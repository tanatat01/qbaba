import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  data={Keyword:""};
  constructor(public navCtrl: NavController) {

  }
  findbarber(){
    console.log(this.data.Keyword);
    this.navCtrl.push(ResultPage,{Keyword: this.data.Keyword});
  }
}
