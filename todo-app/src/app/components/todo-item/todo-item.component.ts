import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  editMode = false;

  public loading: boolean = true;
  public search: string = '';

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.todosService.fetchTodos()
    .pipe(delay(100))
    .subscribe(() => {
      this.loading = false; 
    });
  }

  onChange(id: number) {
    this.todosService.getTodo(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  sortTodoId() {
    this.todosService.sortById();
  }


  sortTodoTitle() {
    this.todosService.sortByTitle();
  }
}
