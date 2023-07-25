import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ModulesRoutingModule } from './modules-routing.module';
import { AppModule } from '../app.module';
import { register } from 'swiper/element/bundle';
import { HomeComponent } from './home/home.component';
import { DetailproductComponent } from './products/detailproduct/detailproduct.component';
import { ModulesComponent } from './modules.component';
import { NavComponent } from '../shared/components/nav/nav.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { ListproductsComponent } from './products/listproducts/listproducts.component';
register();
@NgModule({
  declarations: [HomeComponent, DetailproductComponent, ModulesComponent, NavComponent, FooterComponent, CartComponent, ListproductsComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule
  ],
  exports:[HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ModulesModule { }
