// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';

// Services
import { TodosService } from './core/services/todos.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

// Pipe
import { TodosFilterPipe } from './core/pipes/todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoEditComponent,
    TodosFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
