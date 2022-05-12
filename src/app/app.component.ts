import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'ag';
  columnDefs = [
    { field: 'Emp_ID',sortable: true, filter:true   },
    { field: 'First_name', filter:true },
    { field: 'last_name', filter:true}
];

rowData = [
    { Emp_ID: '21123', First_name: 'Celica', last_name:'lorem' },
    { Emp_ID: '123123', First_name: 'Casas', last_name: 'ipsum' },
    { Emp_ID: '125', First_name: 'ajksdb', last_name: 'jhasd' },
    { Emp_ID: '908', First_name: 'ajis', last_name: 'ajsd' },
    { Emp_ID: '91003', First_name: 'asdjkl', last_name: 'asjibd' },
    { Emp_ID: '2134', First_name: 'asji', last_name: 'asd' },
    { Emp_ID: '23723', First_name: 'miop', last_name: 'un' },
    { Emp_ID: '123', First_name: 'rui', last_name: 'auisd' },
    { Emp_ID: '5485', First_name: 'Celicnio', last_name: 'sdguy' },
    { Emp_ID: '100', First_name: 'hio', last_name: 'gui' },
   
];
}
