"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var OrderComponent = /** @class */ (function () {
    function OrderComponent(_orderService) {
        this._orderService = _orderService;
        this.pageTitle = "*****Orders List********";
        this.imageWidth = 50;
        this.displayListView = false;
        this.displayGridView = true;
        this.showImage = true;
    }
    OrderComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    OrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderService.getProducts().subscribe(function (orders) { return _this.orders = orders; }, function (error) { return _this.errorMessage = error; });
    };
    OrderComponent.prototype.gridViewClicked = function () {
        this.displayGridView = true;
        this.displayListView = false;
    };
    OrderComponent.prototype.listViewClicked = function () {
        this.displayListView = true;
        this.displayGridView = false;
    };
    OrderComponent.prototype.onStarClicked = function (message) {
        this.pageTitle = message;
    };
    OrderComponent = __decorate([
        core_1.Component({
            selector: 'order-dev',
            templateUrl: 'app/Orders/order.component.html',
            //styles:['thead{color:blue;}','h3{color:green;}']
            styleUrls: ['app/orders/order.component.css']
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrderComponent);
    return OrderComponent;
}());
exports.OrderComponent = OrderComponent;
//# sourceMappingURL=orders.component.js.map