import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductProvider } from "../../providers/product/product";
@ Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
public bestsellerproducts = [];
  constructor(private productprovider: ProductProvider, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.productprovider.getProducts()
      .subscribe((allproducts) => {
        this.bestsellerproducts = allproducts.filter(product => product.bestSeller == true);
        console.log(this.bestsellerproducts)
      })
  }

}
