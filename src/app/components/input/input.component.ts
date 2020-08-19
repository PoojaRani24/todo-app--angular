import { Component, OnInit, Output, EventEmitter,ViewChild } from '@angular/core';
 import { Task } from '../../task';
// import { rowsAnimation } from './animations/template.animations';
// import {VERSION} from '@angular/material';
import {  MatTableDataSource } from "@angular/material/table";
import {  MatSort } from "@angular/material/sort";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatPaginator } from "@angular/material/paginator";

import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';

import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  // animations: [rowsAnimation],
})
export class InputComponent implements OnInit {
  newTask:string;
  
  displayedColumns = [ 'id','name','edit','del'];
  dataSource: MatTableDataSource<Task>;
  items: Task[] =[]

  constructor(public dialog: MatDialog) {
    // Assign the data to the data source for the table to render.
    this.dataSource = new MatTableDataSource(this.items);
   }

   @ViewChild(MatTable,{static:true}) table: MatTable<any>;

   openDialog(action,obj) {
     obj.action = action;
    console.log(obj.action)
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }
  // addRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();
    
  // }
  updateRowData(row_obj){
    // this.dataSource = this.dataSource.filter((value,key)=>{
    //   if(value.id == row_obj.id){
    //     value.name = row_obj.name;
    //   }
    //   return true;
    // });
    this.items = this.items.filter((value,key)=>{
      if(value.id==row_obj.id){
        value.name=row_obj.name;
      }
      return true;
  })
   this.dataSource.data = this.items;
    // window.alert("upd")
  }
  deleteRowData(row_obj){
    // this.dataSource = this.dataSource.filter((value,key)=>{
    //   return value.id != row_obj.id;
    // });
    this.items = this.items.filter((value,key)=>{
      return value.id != row_obj.id;  
  });
   this.dataSource.data = this.items;
    // window.alert("delete")
  }  

   // Creates new user.
  createNewUser(id:number,name:String): Task {
    return {
       id: id,
      name: this.newTask
    };
  }

  addRow(newTask:string) {
    this.dataSource.data.push(this.createNewUser(this.dataSource.data.length + 1,this.newTask));
    this.dataSource.filter = "";
  }

  public addToList(){
    console.log(this.newTask)
    if(this.newTask ==''){}
    else{
      console.log("task added");
      this.addRow(this.newTask)
      this.newTask='';
    }
  }

   public deleteTask(index:number){
      this.items = this.items.filter((value,key)=>{
        return value.id != index;
    })
     this.dataSource.data = this.items;

  }

  public editTask(row){
    window.alert("edit task");
    this.items = this.items.filter((value,key)=>{
      if(value.id==row.id){
        value.name=row.name;
      }
      return true;
  })
   this.dataSource.data = this.items;

}

onEnter(value:string){
  console.log(value);
  this.newTask=value;
  this.addToList();
}
ngOnInit(): void {
}

}
