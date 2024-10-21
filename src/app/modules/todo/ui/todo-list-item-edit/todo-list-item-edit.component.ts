import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriorityState, Todo, TodoModelEdit } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrl: './todo-list-item-edit.component.scss',
})
export class TodoListItemEditComponent {
  name? = '';
  text? = '';
  priority? = PriorityState.low;
  PriorityState = PriorityState;
  
  @Input()
  todo?: Todo;

  @Output()
  edit = new EventEmitter<TodoModelEdit>();

  ngOnInit() {
    if (this.todo) {
      this.name = this.todo.name;
      this.text = this.todo.text;
      this.priority = this.todo.priority;
    }
  }

  onEdit() {
    if (this.name && this.text && this.priority) {
      const obj = { name: this.name, text: this.text, priority: this.priority };
      this.edit.emit(obj);
    }
  }

  onCancel() {
    this.name = this.todo?.name;
  }
}
