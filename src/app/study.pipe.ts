import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'study'
})
export class StudyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
