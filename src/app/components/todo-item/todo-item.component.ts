import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  edited = false;

  @Input() todo: ITodo;
  @Output() completeEvent = new EventEmitter<ITodo>();
  @Output() removeEvent = new EventEmitter<ITodo>();

  constructor() {}

  ngOnInit() {
  }

  completeTodo() {
    this.completeEvent.emit(this.todo);
  }

  removeTodo() {
    this.removeEvent.emit(this.todo);
  }

  editTodo() {
    this.edited = this.todo.completed === false;
  }

  updateEvent({ title }: { title: string }) {
    const editedItem = {
      ...this.todo,
      title
    };
    this.edited = false;
    this.todo.title = editedItem.title;
  }

  cancelEdit() {
    this.edited = false;
  }
}
