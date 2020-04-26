import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  public loading: boolean = true;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    });
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }
}
