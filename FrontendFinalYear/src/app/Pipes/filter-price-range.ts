import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterPrice',
     standalone: true
  })

export class FilterPriceRange implements PipeTransform{

    transform(value: any, arg1?: number, arg2?: number): any {
        if(!value)return null;
        if(!arg1)return value;
        if(!arg2)return value;
        const minPrice = arg1;
        const maxPrice = arg2;
        return value.filter(function(item: any) {
            console.log(JSON.stringify(item.carPrice >= minPrice && item.carPrice <= maxPrice));
            return JSON.stringify(item).includes(String(Number(item.carPrice) >= minPrice && Number(item.carPrice) <= maxPrice));         
        });
    }
}
