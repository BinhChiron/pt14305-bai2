import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import { data } from '../Modtata';
import {ProdustService} from '../produst.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  products = data;
  Delete(id){
      this.products = this.products.filter(x => x.id !== id);
  }

}
