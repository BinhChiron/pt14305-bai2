import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component' 
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: ProductListComponent },
  { path: 'Manager', component: ProductManagerComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'List', component: ProductListComponent },
  { path: 'Product/:id', component: ProductDetailComponent },
  { path: 'Manager/Add', component: ProductAddComponent },
  { path: 'Manager/Update', component: ProductAddComponent },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
