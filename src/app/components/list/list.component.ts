import { Component, OnInit, Input } from '@angular/core';
import {  MatTableDataSource } from "@angular/material/table";
import {  MatSort } from "@angular/material/sort";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatPaginator } from "@angular/material/paginator";
import {  MatInputModule } from "@angular/material/input";
import { Task } from '../../task';
import { ViewChild } from '@angular/core'
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 dataSource = new MatTableDataSource<any>()
 
//  items:Task[];
 @Input() items:Task[];
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { 
    console.log('Called Constructor');
  }

  ngOnInit(): void {
    console.log("hit ng");
    this.dataSource.data=this.items;
    this.dataSource.paginator=this.paginator;
  }

  //  items = [];
  displayColumns: string[]=['name'];


ngOnChanges(){
  console.log(this.items);
  console.log("this should update");
  this.dataSource.data=this.items;
  this.ngOnInit()
  }

// sortData($event){
//   const sortId=$event.active;
//   const sortDirection=$event.direction;
//   if('asc'==sortDirection){
//     this.dataSource.data=this.dataSource.slice().sort(
//       (a,b)=>a[sortId]>b[sortId]?-1:a[sortId]<b[sortId]?1:0
//     );
//   }
//   else{
//     this.dataSource.data=this.dataSource.slice().sort(
//       (a,b)=>a[sortId]<b[sortId]?-1:a[sortId]>b[sortId]?1:0
//     );
//   }
// }


  //------------- Ignore --------------------------------
// public deleteTask(index:number){
//   this.inputComponent.items.splice(index,1);
// }

// public editTask(index:number){
//   window.alert (this.inputComponent.items[index] +" is marked as Done !");
//   // this.items.splice(index,1);
//   this.inputComponent.items.splice(index,1);
// }


}
