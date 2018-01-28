import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { RobotComponent } from './robot.component'
import {OrderComponent} from './Orders/orders.component'

@NgModule({
    imports:[ BrowserModule ],
    declarations : [ AppComponent, RobotComponent, OrderComponent ],
    bootstrap: [ AppComponent ]
})

export class AppModule{}