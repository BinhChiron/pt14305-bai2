import { Component, OnInit } from '@angular/core';
import { ProdustService } from '../produst.service';
import { ActivatedRoute, Router} from '@angular/router';
import {product} from '../product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: product;

  constructor(
     private productService: ProdustService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.product = this.productService.getProduct(param.id);
    })
  }
  submitForm(){
    this.productService.editProduct(this.product);
    this.router.navigate(['/manager']);
  }

}