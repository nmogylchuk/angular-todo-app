import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() search: string;
  todos: ITodo[];
  public loading: boolean;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadTodos() {
    this.loading = false;
    this.todos = this.todosService.todos;
  }
}
