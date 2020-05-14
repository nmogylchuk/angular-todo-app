import { Component, OnInit } from '@angular/core';
import { TodosService } from './../../core/services/todos.service';
import { ITodo } from './../../core/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  title: string;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo() {
    const todo: ITodo = {
      id: this.todosService.getNextTodoId(),
      userId: 123,
      title: this.title,
      completed: false,
      date: new Date()
    };
    this.todosService.addTodo(todo);
    this.title = '';
  }
}
