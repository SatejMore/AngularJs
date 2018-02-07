import { Component, OnInit, transition} from '@angular/core'
import {IOrder} from './orders'
import { OrderService } from './order.service';

@Component({
    selector : 'order-dev',
    templateUrl : 'app/Orders/order.component.html',
    //styles:['thead{color:blue;}','h3{color:green;}']
    styleUrls:['app/orders/order.component.css']
})

export class OrderComponent implements OnInit
{
    pageTitle:string = "*****Orders List********";
    filterText:string;
    imageWidth:number = 50;
    displayListView:boolean = false;
    displayGridView:boolean = true;
    orders:IOrder[];
    showImage:boolean = true;
    errorMessage :string;
    constructor(private _orderService:OrderService){}

    toggleImage():void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
       this._orderService.getProducts().subscribe(orders=>this.orders=orders, 
        error=>this.errorMessage = <any>error)
    }

    gridViewClicked():void{
        this.displayGridView = true;
        this.displayListView = false;
    }

    listViewClicked():void{
        this.displayListView = true;
        this.displayGridView = false;
    }

    onStarClicked(message:string):void
    {
        this.pageTitle = message;
    }
}