import { Component, OnInit } from '@angular/core';
// import { Task } from '../../task';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  items=[];
  newTask;
  constructor() { }

  public addToList(){
    if(this.newTask ==''){}
    else{
      console.log("task added");
      this.items.push(this.newTask);
      this.newTask='';
    }
  }
  ngOnInit(): void {
  }

}
