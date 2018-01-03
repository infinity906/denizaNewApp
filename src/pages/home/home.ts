import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductProvider } from "../../providers/product/product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private productProvider: ProductProvider, private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.productProvider.getProducts()
    .subscribe(response => console.log(response))

  }

}
