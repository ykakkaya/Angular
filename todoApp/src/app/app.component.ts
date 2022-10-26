import { Component } from '@angular/core';
import { Model,ToDoItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 model=new Model();
 isdisplay=false


getName(){
  return this.model.user;
}
getItems(){
  if (this.isdisplay){
    return this.model.items
  }
  return this.model.items.filter( (item: { action: any; })=>!item.action);
}

addItem(value: string){
  if(value!=""){
    this.model.items.push(new ToDoItem(value,false))
  }
}
}
