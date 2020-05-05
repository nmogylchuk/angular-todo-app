import { Component, OnInit, Input } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  edited = false;

  @Input() todo: ITodo;

  constructor(public todosService: TodosService) {}

  ngOnInit() {
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  editTodo() {
    console.log("dbclick todo: " + this.todo.id)
    this.edited = this.todo.completed === false;
  }
}