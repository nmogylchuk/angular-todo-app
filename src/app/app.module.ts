// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';

// Components
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { TodoActionComponent } from './components/todo-action/todo-action.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

// Services
import { TodosService } from './core/services/todos.service';

// Pipe
import { TodosFilterPipe } from './core/pipes/todos-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormComponent,
    TodoEditComponent,
    TodosFilterPipe,
    TodoAppComponent,
    TodoActionComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
