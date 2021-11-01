import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];

  constructor() {
    this.todos.push('Passear com cachorro');
    this.todos.push('Ir ao supermercado');
    this.todos.push('Cortar o cabelo');
    this.todos.push('Voltar para casa');
  }
}