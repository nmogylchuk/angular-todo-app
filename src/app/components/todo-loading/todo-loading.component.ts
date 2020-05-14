import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todo-loading',
  templateUrl: './todo-loading.component.html',
  styleUrls: ['./todo-loading.component.scss']
})
export class TodoLoadingComponent implements OnInit {
  @Output() load = new EventEmitter();

  constructor(public todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService
      .fetchTodos()
      .pipe(delay(100))
      .subscribe(() => {
        this.loadTodos();
      });
  }

  loadTodos() {
    this.load.emit();
  }
}
