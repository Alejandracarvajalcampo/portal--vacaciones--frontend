import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(employees: Employee[], searchText: string): Employee[] {
    if (!searchText) {
      return employees;
    }

    searchText = searchText.toLowerCase();

    return employees.filter((employee: Employee) => {
      return (
        employee.names.toLowerCase().includes(searchText) ||
        employee.surnames.toLowerCase().includes(searchText)
      );
    });
  }
}
