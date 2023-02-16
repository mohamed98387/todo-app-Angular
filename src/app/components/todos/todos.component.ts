import { Component, OnInit, OnChanges } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  todoE: Todo[] = [];
  inputTodo: string = '';
  isModalOpen = false;

  openModal(todo: any) {
    this.isModalOpen = !this.isModalOpen;
    this.todoE = [
      { id: todo.id, content: todo.content, completed: todo.completed },
    ];
    console.log(this.todoE);
  }
  closeModal() {
    this.isModalOpen = !this.isModalOpen;
  }
  constructor() {
    this.todos = [];
  }
  ngOnInit(): void {}

  toggleDone(id: any) {
    this.todos.map((o, i) => {
      if (i == id) o.completed = !o.completed;
      return o;
    });
  }
  edit(todo: any) {
    this.todos.map((o, i) => {
      if (o.id == todo.id) o.content = todo.content;
      console.log(o);
      return o;
    });
  }
  delete(id: any) {
    this.todos = this.todos.filter((o, i) => id !== i);
  }
  addTodo() {
    this.todos.push({
      id: uuidv4(),
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
  removeAll() {
    this.todos = [];
  }
  get() {
    console.log(this.isModalOpen);
  }
}
