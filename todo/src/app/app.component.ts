import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    this.todos.push(new Todo(2, 'Ir à academia', false));
    this.todos.push(new Todo(3, 'Ir ao supermercado', false));
    this.todos.push(new Todo(4, 'Cortar o cabelo', true));
    this.todos.push(new Todo(5, 'Voltar para casa', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  maskAsDone(todo: Todo) {

  }

  markAsUndone(todo: Todo) {

  }
}