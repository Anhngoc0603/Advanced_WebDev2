import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Notfound } from './notfound/notfound';
import { About } from './about/about';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { Ex13 } from './ex13/ex13';
import { Ex13detail } from './ex13detail/ex13detail';
import { FakeProduct } from './fake-product/fake-product';
import { FakeProduct2 } from './fake-product2/fake-product2';
import { CoindeskAPI } from './coindesk-api/coindesk-api';
import { Catalog } from './catalog/catalog';

const routes: Routes = [
  {path:"gioi-thieu", component: About},
  // {path:"khach-hang-1", component: Listcustomer},
  // {path:"khach-hang-2", component: Listcustomer2},
  // {path:"khach-hang-3", component: Listcustomer3},
  {path:"san-pham-1", component: Listproduct},
  {path:"san-pham-1/:id", component: Productdetail},
  {path:'ex13-product',component:Ex13},
  {path:'ex13-product/:id', component:Ex13detail},
  {path:"ex26", component: FakeProduct},
  {path:"ex27", component: FakeProduct2},
  {path:"ex28", component: CoindeskAPI},
  {path:"ex14-product", component: Catalog},
  {path:"**", component: Notfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
