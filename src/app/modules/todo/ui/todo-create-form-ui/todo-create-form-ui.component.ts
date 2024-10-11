import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrl: './todo-create-form-ui.component.scss',
})
export class TodoCreateFormUiComponent {
  name: string = '';
  text: string = '';
  priority: number = 0;

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
