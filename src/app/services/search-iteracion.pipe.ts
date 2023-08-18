import { Pipe, PipeTransform } from '@angular/core';
import {Iteracion} from "../entities/Iteracion/iteracion";

@Pipe({
  name: 'searchIteracion'
})
export class SearchIteracionPipe implements PipeTransform {

  transform(values: Iteracion[], arg:string): Iteracion[] {
const result: Iteracion[]=[];

if (arg==null || arg=="") return values;
else {
    for(const post of values){
      if(post.nombIteracion.toLowerCase().indexOf(arg.toLowerCase())>-1){
result.push(post);
      }
    }
    return result;
}
  }
}
