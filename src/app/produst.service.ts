import { Injectable } from '@angular/core';
import{product} from './product';
import{data} from './Modtata';

@Injectable({
  providedIn: 'root'
})
export class ProdustService {
  products = data;
  constructor() { }
  getProduct(id){ //chi tiet san pham
  
  return this.products.find(product => product.id == id);
 
  }
  getProducts(){// danh sach san pham
    return this.products;
  }
  addProduct(product){
    console.log(product);
    let newObj = {
      id: 20, ...product
    };
    this.products.push(newObj);

  }
  updateProduct(product){
    
  }
}

