import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    templateUrl : 'app/Orders/orderdetails.component.html'
})

export class OrderDetail implements OnInit{
    pageTitle:string = "Order Details"
    orderName:string;
    orderImageUrl:string;
    orderDescription:string;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void
    {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `:${id}`;

        this._route.queryParams.
        subscribe((params)=>{
            this.orderName = params['name'],
            this.orderImageUrl = params['imgurl'],
            this.orderDescription = params['desc']
        })

    }

    onBackBtnClick():void{
        this._router.navigate(['/Orders'])
    }
}