import {Component} from '@angular/core'

@Component({
    selector : 'app-dev',
    template : `
        <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid"></div>
                <a class="navbar-brand">Angular</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/Home']">Home</a></li>
                    <li><a [routerLink]="['/Orders']">Orders</a></li>
                    <li><a [routerLink]= "['/Products']">Products</a></li>
                </ul>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </div>
    `
})

export class AppComponent {}