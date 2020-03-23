import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import { Data } from '@angular/router';
import {ProdustService} from '../produst.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  selected: product;
  products: product[];

  constructor(
    private ProdustService: ProdustService
  ) { }

  ngOnInit(): void {
    this.getproducts();
  }

  
  showDetail(product){
    this.selected = product;
  }

  Delete(id){
      this.products = this.products.filter(x => x.id !== id);
      console.log(product);
  }
  getproducts(){
    this.products = this.ProdustService.getProducts();

  }

}
