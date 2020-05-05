import { Pipe, PipeTransform } from '@angular/core';
import { ITodo } from './../interfaces/todo';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {
  transform(todos: ITodo[], search: string = ''): ITodo[] {
    if (!search.trim()) {
      return todos;
    }
    return todos.filter(todo => {
      return todo.title.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
    });
  }
}
