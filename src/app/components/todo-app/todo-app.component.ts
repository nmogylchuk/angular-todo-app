import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {
  @Input() search: string;
  todosArray: ITodo[];
  public loading: boolean;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadTodos() {
    this.loading = false;
    this.todosArray = this.todosService.todos;
  }

  completeTodo(todo: ITodo) {
    this.todosService.completeTodo(todo.id);
    this.todosArray = this.todosService.todos;
  }

  removeTodo(todo: ITodo) {
    this.todosService.removeTodo(todo.id);
    this.todosArray = this.todosService.todos;
  }

}
