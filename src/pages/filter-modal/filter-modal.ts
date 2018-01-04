import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-modal',
  templateUrl: 'filter-modal.html',
})
export class FilterModalPage {

  public femaleselected = true;
  public maleselected = true;

  constructor(private viewController: ViewController, public navCtrl: NavController, public navParams: NavParams) {
this.femaleselected = this.navParams.get("femaleselected");
this.maleselected = this.navParams.get("maleselected");
  }

  closeModal(){
    let filterstate = {
      femaleselected: this.femaleselected,
      maleselected: this.maleselected
    }
    this.viewController.dismiss(filterstate);
  //this.navCtrl.pop();
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModalPage');
  }

}
