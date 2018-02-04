import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component'
import { RobotComponent } from './robot.component'
import {OrderComponent} from './Orders/orders.component'
import { OrderFilter } from './Orders/order-filter.pipe';
import { starComponent } from './shared/star.component';


@NgModule({
    imports:[ BrowserModule,FormsModule ],
    declarations : [ AppComponent, RobotComponent, OrderComponent, OrderFilter, starComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}