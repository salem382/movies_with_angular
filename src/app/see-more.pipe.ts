import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})

export class SeeMorePipe implements PipeTransform {

  transform(value:string): string {

    return  value.split(' ').splice(0, 3).join(' ') ;
  }

}

