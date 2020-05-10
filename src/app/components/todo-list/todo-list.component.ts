import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() search: string;
  public loading: boolean;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadTodos() {
    this.loading = false;
  }
}
