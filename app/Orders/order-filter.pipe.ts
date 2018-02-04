import {Pipe,PipeTransform} from '@angular/core'
import {IOrder} from './orders'

@Pipe({
    name : 'orderFilter'
})

export class OrderFilter implements PipeTransform{

    transform(value:IOrder[],valueBy:string):IOrder[]{
        valueBy = valueBy? valueBy.toLowerCase():null;
        return valueBy? value.filter((order:IOrder)=> order.productName.toLowerCase().indexOf(valueBy) != -1):value
    }

}