import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound } from './notfound/notfound';
import { About } from './about/about';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { Ex13 } from './ex13/ex13';
import { Ex13detail } from './ex13detail/ex13detail';

const routes: Routes = [
  {path:"gioi-thieu", component: About},
  // {path:"khach-hang-1", component: Listcustomer},
  // {path:"khach-hang-2", component: Listcustomer2},
  // {path:"khach-hang-3", component: Listcustomer3},
  {path:"san-pham-1", component: Listproduct},
  {path:"san-pham-1/:id", component: Productdetail},
  {path:'ex13-product',component:Ex13},
  {path:'ex13-product/:id', component:Ex13detail},
  {path:"**", component: Notfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
