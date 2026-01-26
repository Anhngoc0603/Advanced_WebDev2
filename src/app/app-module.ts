import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Notfound } from './notfound/notfound';
import { About } from './about/about';
import { Listproduct } from './listproduct/listproduct';
import { Productdetail } from './productdetail/productdetail';
import { Ex13 } from './ex13/ex13';
import { Ex13detail } from './ex13detail/ex13detail';
import { HttpClientModule} from '@angular/common/http';
import { FakeProduct } from './fake-product/fake-product';
import { FakeProduct2 } from './fake-product2/fake-product2';
import { CoindeskAPI } from './coindesk-api/coindesk-api';

@NgModule({
  declarations: [
    App,
    Notfound,
    About,
    Listproduct,
    Productdetail,
    Ex13,
    Ex13detail,
    FakeProduct,
    FakeProduct2,
    CoindeskAPI
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
