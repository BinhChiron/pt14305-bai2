import { Component, OnInit } from '@angular/core';
import{product} from '../product';
import{data} from '../Modtata';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   products = data;
  Delete(id){
      this.products = this.products.filter(x => x.id !== id);
      console.log(product);
  }

}