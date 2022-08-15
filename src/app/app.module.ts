import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';

import { CardetailComponent } from './components/cardetail/cardetail.component';
import { UserComponent } from './components/user/user.component';
import { CarimageComponent } from './components/carimage/carimage.component';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { BrandfilterPipe } from './pipes/brandfilter.pipe';
import { ColorfilterPipe } from './pipes/colorfilter.pipe';
import { CarfilterPipe } from './pipes/carfilter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    CardetailComponent,
    UserComponent,
    CarimageComponent,
    FilterPipePipe,
    BrandfilterPipe,
    ColorfilterPipe,
    CarfilterPipe,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
