import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../admin/modelAdmin/car';

@Pipe({
    name: 'range',
     standalone: true
  })

export class Range implements PipeTransform {
    transform(carsList: Car[],minRange:any,maxRange:any) {
        

        
    }
}
