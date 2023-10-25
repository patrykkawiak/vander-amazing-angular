import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { HomeModule } from './components/home/home.module';
import { BlogModule } from './components/blog/blog.module';
import { ErrorComponent } from './components/error/error.component';
import { ShopModule } from './components/shop/shop.module';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [AppComponent, ErrorComponent, CheckoutComponent],
  imports: [
    BrowserModule,
    NavigationModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    BlogModule,
    ShopModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
