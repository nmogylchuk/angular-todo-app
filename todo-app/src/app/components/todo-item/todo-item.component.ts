import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
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

  completeTodo(id: number) {
    this.todosService.completeTodo(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  editTodo(id: number) {
    console.log("Change edit status for todo:" + id)
    console.log("Change edit status for todo:" + this.todosService.getTodo(id).edit);
    this.todosService.editTodo(id);
    console.log("todo changed status to: " + this.todosService.getTodo(id).edit)
  }
}
