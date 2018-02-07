import{Injectable} from '@angular/core'
import {Http,Response} from '@angular/http'
import{Observable} from 'rxjs/Observable'
import{IOrder} from './orders'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()

export class OrderService{
    private _productUrl = "api/products/products.json"

    constructor(private _http:Http){}

    getProducts():Observable<IOrder[]>{
        return this._http.get(this._productUrl).
        map((respone:Response)=><IOrder[]>respone.json())
        .catch(this.errorHandler)
    }

    private errorHandler(error:Response){
        return Observable.throw(error.json()||"Server Error"); 
    }

}