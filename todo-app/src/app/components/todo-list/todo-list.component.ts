import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() search: string;

  public loading: boolean = true;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.todosService
      .fetchTodos()
      .pipe(delay(100))
      .subscribe(() => {
        this.loading = false;
      });
  }
}
