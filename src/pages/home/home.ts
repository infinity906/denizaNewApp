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
  private femaleselected = true;
  private maleselected = true;

  constructor(private modalController: ModalController, private productProvider: ProductProvider, private http: Http, public navCtrl: NavController) {

  }

  ionViewDidLoad(){
    this.productProvider.getProducts()
    .subscribe((response) => {
      this.allproducts = response;
    });

  }
openFilterModal(){
  let filterStateFromMainPage = {
    femaleselected: this.femaleselected,
    maleselected:this.maleselected
  }
  let openFilterModal = this.modalController.create(FilterModalPage, filterStateFromMainPage);
  openFilterModal.onDidDismiss((filterstate)=>{
    this.femaleselected = filterstate.femaleselected;
    this.maleselected = filterstate.maleselected;
    this.productProvider.getProducts()
    .subscribe((allproducts) => {
      let products = allproducts;
      if(filterstate.maleselected && filterstate.femaleselected){
        this.allproducts = products;
        return;
      }else if (!filterstate.maleselected && !filterstate.femaleselected){
        this.allproducts = [];
        return;
      }else if (filterstate.femaleselected && !filterstate.maleselected){
        this.allproducts = products.filter((product) => {
          return product.gender !== "male";
        });
      } else if (!filterstate.femaleselected && filterstate.maleselected){
        this.allproducts = products.filter((product) => {
          return product.gender !== "female";
        });
    };
  });
});
openFilterModal.present();
}

gotoProductDetailPage(product){
    this.navCtrl.push(ProductDetailPage, {
      productDetails: product
    });
  }
}
