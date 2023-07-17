import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailproductComponent } from './products/detailproduct/detailproduct.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  { path: 'detalle', component: DetailproductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
