import { Component, EventEmitter, Output } from '@angular/core';
import { PriorityState } from '../../model/todo';

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
  create = new EventEmitter<string>();
    
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.name) {
      this.create.emit(this.name);
      this.name = '';
    }
  }
}
