import { Component, OnInit, Input } from '@angular/core';
import {product} from '../product';
import { ProdustService } from '../produst.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
 product: product;
  constructor(
    private productService : ProdustService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
 

    this.router.params.subscribe(param => { 
      this.product = this.productService.getProduct(param.id);

    })

  }


}
