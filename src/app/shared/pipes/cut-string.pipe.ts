import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString'
})
export class CutStringPipe implements PipeTransform {

  transform(desc:string,n:number): unknown {
    return desc.substring(0,n);
  }

}
