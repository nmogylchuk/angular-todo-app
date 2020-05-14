import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() search: string;
  @Input() todos: ITodo[];
  @Output() completeEvent = new EventEmitter<ITodo>();
  @Output() removeEvent = new EventEmitter<ITodo>();

  constructor() {}

  completeTodo(todo: ITodo) {
    this.completeEvent.emit(todo);
  }

  removeTodo(todo: ITodo) {
    this.removeEvent.emit(todo);
  }
}
