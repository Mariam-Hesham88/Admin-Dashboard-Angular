import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTaskItem'
})
export class SearchTaskItemPipe implements PipeTransform {

  transform(data: any[], term:string): any[] {
    return data.filter( (item)=> item.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
  }

}
