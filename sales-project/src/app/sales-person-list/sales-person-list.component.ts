import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create array of objects

  salesPersonList: SalesPerson[]= 
  [
    new SalesPerson("Manish","kumar","manish@gmail.com",50000),
    new SalesPerson("Ravi","kumar","ravi@gmail.com",60000),
    new SalesPerson("mahesh","babu","maheshbabu@gmail.com",40000),
    new SalesPerson("katraj","buss","katraj@buss.com",90000)
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
