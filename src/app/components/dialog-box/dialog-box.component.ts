import { Component, OnInit } from '@angular/core';
import {  Inject, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})

export class DialogBoxComponent {
  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Task) {
      console.log(data);
      this.local_data = {...data};
      this.action = this.local_data.action;
  }

  doAction(){
    console.log("ok");
     this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    console.log("No");
     this.dialogRef.close({event:'Cancel'});
  }

}
