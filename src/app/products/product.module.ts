import { NgModule } from '@angular/core';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces.pipe";
import {RouterModule} from "@angular/router";
import {ProductGuardService} from "./product-detail/product-guard.service";
import {ProductService} from "./product.service";
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path:'products', component: ProductListComponent },
      { path:'products/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent },
    ])
  ],
  providers: [ProductService, ProductGuardService]

})
export class ProductModule { }
