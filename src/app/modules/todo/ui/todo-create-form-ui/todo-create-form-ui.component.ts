import { Component, EventEmitter, Output } from '@angular/core';
import { PriorityState, TodoModelCreate } from '../../model/todo';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrl: './todo-create-form-ui.component.scss',
})
export class TodoCreateFormUiComponent {
  [x: string]: any;
  name: string = '';
  text: string = '';
  priority: PriorityState = PriorityState.low;
  PriorityState = PriorityState;

  @Output()
  create = new EventEmitter<TodoModelCreate>();

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.name && this.text && this.priority) {
      const newTodo = { name: this.name, text: this.text, priority: PriorityState.low }
      this.create.emit(newTodo);
      this.name = '';
    }
  }

  generateId() {
    return Math.floor(Math.random() * 1000000); // Generates a number between 0 and 999999
  }
}
