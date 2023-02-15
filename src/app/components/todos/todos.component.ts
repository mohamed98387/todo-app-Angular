import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  inputTodo: string = '';
  constructor() {}
  ngOnInit(): void {
    this.todos = [
      {
        content: 'todo1',
        completed: false,
      },
      {
        content: 'todo2',
        completed: false,
      },
    ];
  }
  toggleDone(id: any) {
    this.todos.map((o, i) => {
      if (i == id) o.completed = !o.completed;
      return o;
    });
  }
  delete(id: any) {
    this.todos = this.todos.filter((o, i) => id == !i);
  }
  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
  removeAll() {
    this.todos = [];
  }
}
