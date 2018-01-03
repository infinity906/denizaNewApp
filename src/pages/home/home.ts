import { Component } from '@angular/core';
import { NavController,  ModalController} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { ProductProvider } from "../../providers/product/product";
import {ProductDetailPage } from "../product-detail/product-detail";
import { FilterModalPage } from "../filter-modal/filter-modal";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allproducts = [];

  constructor(private modalController: ModalController, private productProvider: ProductProvider, private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.productProvider.getProducts()
    .subscribe((response) => {
      this.allproducts = response;
    });

  }
openFilterModal(){
  let openFilterModal = this.modalController.create(FilterModalPage);
  openFilterModal.present();
}
  gotoProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    })
  }

}
