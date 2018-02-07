import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component'
import { RobotComponent } from './robot.component'
import {OrderComponent} from './Orders/orders.component'
import { OrderFilter } from './Orders/order-filter.pipe';
import { starComponent } from './shared/star.component';
import { OrderService } from './Orders/order.service';


@NgModule({
    imports:[ BrowserModule,FormsModule,HttpModule ],
    declarations : [ AppComponent, RobotComponent, OrderComponent, OrderFilter, starComponent ],
    providers:[OrderService],
    bootstrap: [ AppComponent ]
})

export class AppModule{}