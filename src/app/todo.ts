export class Todo {

  public id: number;

  public todo: string;

  public todoPriority: string;

  public todoPriorityNum: number;

  public todoDate: Date;

  private priorityMap: Map<string, number> =
  new Map([['No Priority', 0], ['Low Priority', 1], ['Medium Priority', 2], ['High Priority', 3]]);


  constructor (id: number, todoString: string, todoPriority: string, todoDate: Date) {
      this.id = id;
      this.todo = todoString;
      this.todoPriority = todoPriority;
      this.todoPriorityNum = this.priorityValue(todoPriority);
      this.todoDate = todoDate;
  }

  private priorityValue(priority: string): number {
      return this.priorityMap.get(priority);
  }
}
