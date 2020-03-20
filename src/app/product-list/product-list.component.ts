import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import{data} from '../Modtata';
import { Data } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;

  selected: product;
  showDetail(product){
    this.selected = product;
  }

  Delete(id){
      this.products = this.products.filter(x => x.id !== id);
      console.log(product);
  }

}