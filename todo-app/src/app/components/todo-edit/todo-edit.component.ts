import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  saveTodo(id: number, title: string) {
    this.todosService.updateTodoTitle(id, title);
  }

}
