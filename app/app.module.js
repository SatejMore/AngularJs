"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var orders_component_1 = require("./Orders/orders.component");
var order_filter_pipe_1 = require("./Orders/order-filter.pipe");
var star_component_1 = require("./shared/star.component");
var order_service_1 = require("./Orders/order.service");
var product_component_1 = require("./Products/product.component");
var orderdetails_component_1 = require("./Orders/orderdetails.component");
var home_component_1 = require("./Home/home.component");
var notfound_component_1 = require("./shared/notfound.component");
var orderdetails_guard_service_1 = require("./Orders/orderdetails-guard.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot([
                    { path: 'Products', component: product_component_1.ProductComponent },
                    { path: 'Orders', component: orders_component_1.OrderComponent },
                    { path: 'Orders/:id', canActivate: [orderdetails_guard_service_1.OrderDetailsGaurd], component: orderdetails_component_1.OrderDetail },
                    { path: 'Home', component: home_component_1.HomeComponent },
                    { path: '', redirectTo: 'Home', pathMatch: 'full' },
                    { path: '**', component: notfound_component_1.NotFound }
                ])],
            declarations: [app_component_1.AppComponent,
                orders_component_1.OrderComponent,
                order_filter_pipe_1.OrderFilter,
                star_component_1.starComponent,
                home_component_1.HomeComponent,
                product_component_1.ProductComponent,
                orderdetails_component_1.OrderDetail,
                notfound_component_1.NotFound],
            providers: [order_service_1.OrderService, orderdetails_guard_service_1.OrderDetailsGaurd],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map