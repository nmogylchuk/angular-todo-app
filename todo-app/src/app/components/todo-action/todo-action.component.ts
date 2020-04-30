import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';

@Component({
  selector: 'app-todo-action',
  templateUrl: './todo-action.component.html',
  styleUrls: ['./todo-action.component.scss']
})
export class TodoActionComponent implements OnInit {
  public search: string;

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {}

  sortTodoCompleted() {
    this.todosService.sortByCompleted();
  }

  sortTodoNotCompleted() {
    this.todosService.sortByNotCompleted();
  }

  sortTodoTitle() {
    this.todosService.sortByTitle();
  }

  sortTodoId() {
    this.todosService.sortById();
  }
}
