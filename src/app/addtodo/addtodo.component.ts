import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  public todo: string;

  public todoPriority: string;

  public timeStamp: Date;

  constructor(public todoService: TodoService) { }

  ngOnInit() {
  }

  public addTodo(): void {
    this.todoService.addTodo(this.todo, this.todoPriority, new Date());
}

}
