import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() items:string[];
  constructor() { }

public deleteTask(index:number){
  this.items.splice(index,1);
}

public editTask(index:number){
  window.alert (this.items[index] +" is marked as Done !");
  // this.items.splice(index,1);
  this.items.splice(index,1);
}

  ngOnInit(): void {
  }

}
