import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ITodo } from './../interfaces/todo';

// export interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
//   date?: any;
// }

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
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  updateTodoTitle(id: number, title: string) {
    this.todos.find(t => t.id === id).title = title;
  }

  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }

  sortById() {
    this.todos.sort((a, b) => a.id - b.id);
  }

  sortByTitle() {
    this.todos.sort((a, b) => a.title.localeCompare(b.title));
  }
}
