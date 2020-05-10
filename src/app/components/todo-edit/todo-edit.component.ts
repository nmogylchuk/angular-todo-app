import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from './../../core/interfaces/todo';
import { MaterialModule } from './../../core/material/material.module';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent {
  updatedTitle = '';

  @Input() set todo(todo: ITodo) {
    this.updatedTitle = todo.title;
  }

  @Output() save = new EventEmitter<{ title: string }>();
  @Output() cancel = new EventEmitter();


  saveTodoTitle() {
    this.save.emit({
      title: this.updatedTitle
    });
  }

  cancelTodo() {
    this.cancel.emit();
  }
}
