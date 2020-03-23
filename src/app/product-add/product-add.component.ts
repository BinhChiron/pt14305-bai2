import { Component, OnInit } from '@angular/core';
import { product } from '../product';
import {ProdustService} from '../produst.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  product: product = new product();
  constructor(
    private ProdustService: ProdustService
  ) { 
    
  }

  ngOnInit(): void {
  }
  addProduct(){
    this.ProdustService.addProduct(this.product);
    console.log(this.product)
    
  }
}
