import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from './../../core/interfaces/todo';
import { MaterialModule } from './../../core/material/material.module';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  edited = true;
  updatedTodo: ITodo;
  updatedTitle = '';

  @Input() set todo(todo: ITodo) {
    this.updatedTitle = todo.title;
    this.updatedTodo = todo;
  }

  ngOnInit(): void {
  }

  saveTodoTitle() {
    this.updatedTodo.title = this.updatedTitle;
    this.edited = false;
  }

  cancelTodo() {
    this.edited = false;
  }
}
