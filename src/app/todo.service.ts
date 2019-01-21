import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

    private currentId: number;

  constructor() {

    const todoList = this.getTodoList();

    if (todoList.length === 0) {
        this.currentId = 0;
    } else {
        this.currentId = todoList[todoList.length - 1].id + 1;
    }

  }

  public getTodoList(): Todo[] {
      const todoList = JSON.parse(localStorage.getItem('todoList'));
      return todoList == null ? [] : todoList.todoList;
  }

  public addTodo(todo: string, todoPriority: string, todoDate: Date): void {
      const todoList: Todo[] = this.getTodoList();
      const newTodo = new Todo(this.currentId, todo, todoPriority, todoDate);
      this.currentId++;
      todoList.push(newTodo);
      const sortedTodoList = todoList.sort(function(todo1, todo2) {
          if (todo1.todoPriorityNum === todo2.todoPriorityNum) {
            if (todo1.todoDate > todo2.todoDate) {
                return 1;
            } else {
                return -1;
            }
          } else if (todo1.todoPriorityNum > todo2.todoPriorityNum) {
              return -1;
          } else {
              return 1;
          }
      });
      this.setList(sortedTodoList);
  }

  public deleteTodo(id: number): void {
      let todoList: Todo[] = this.getTodoList();
      todoList = todoList.filter((todo) => todo.id !== id);
      this.setList(todoList);
  }

  private setList(todoList: Todo[]): void {
    localStorage.setItem('todoList', JSON.stringify({todoList: todoList}));
  }

}
