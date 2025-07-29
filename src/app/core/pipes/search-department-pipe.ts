import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchDepartment'
})
export class SearchDepartmentPipe implements PipeTransform {

  transform(data:any[], term:string): any[] {
    return data.filter( (item)=> item.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) );
  }

}
