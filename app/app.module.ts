import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component'
import {OrderComponent} from './Orders/orders.component'
import { OrderFilter } from './Orders/order-filter.pipe';
import { starComponent } from './shared/star.component';
import { OrderService } from './Orders/order.service';
import { ProductComponent } from './Products/product.component';
import { OrderDetail } from './Orders/orderdetails.component';
import { HomeComponent } from './Home/home.component';
import { NotFound } from './shared/notfound.component';
import { OrderDetailsGaurd } from './Orders/orderdetails-guard.service';


@NgModule({
    imports:[ BrowserModule,FormsModule,HttpModule, RouterModule.forRoot([
        {path:'Products',component:ProductComponent},
        {path:'Orders',component:OrderComponent},
        {path:'Orders/:id',canActivate:[OrderDetailsGaurd],component:OrderDetail},
        {path:'Home',component:HomeComponent},
        {path:'',redirectTo:'Home',pathMatch:'full'},
        {path:'**',component:NotFound}
    ]) ],
    
    declarations : [ AppComponent, 
        OrderComponent,
        OrderFilter,
        starComponent,
        HomeComponent ,
        ProductComponent, 
        OrderDetail, 
        NotFound ],

    providers:[OrderService,OrderDetailsGaurd],
    bootstrap: [ AppComponent ]
})

export class AppModule{}