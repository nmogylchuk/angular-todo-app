import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ITodo } from './../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  public todos: ITodo[] = [];

  constructor(private http: HttpClient) {}

  fetchTodos(): Observable<ITodo[]> {
    return this.http
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=200')
      .pipe(tap(todos => (this.todos = todos)));
  }

  getTodo(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    return this.todos[idx];
  }

  completeTodo(id: number) {
    const idx = this.todos.findIndex(t => t.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  sortByCompleted() {
    this.todos.sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }

      if (a.completed) {
        return -1;
      }

      if (b.completed) {
        return 1;
      }
    });
  }

  sortByNotCompleted() {
    this.todos.sort((b, a) => {
      if (b.completed === a.completed) {
        return 0;
      }

      if (a.completed) {
        return -1;
      }

      if (b.completed) {
        return 1;
      }
    });
  }

  sortByTitle() {
    this.todos.sort((a, b) => a.title.localeCompare(b.title));
  }

  sortById() {
    this.todos.sort((a, b) => a.id - b.id);
  }

  getNextTodoId() {
    return this.todos.length + 1;
  }

}
