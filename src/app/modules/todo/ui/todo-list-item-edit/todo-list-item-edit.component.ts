import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-edit',
  templateUrl: './todo-list-item-edit.component.html',
  styleUrl: './todo-list-item-edit.component.scss',
})
export class TodoListItemEditComponent {

  name? = '';

  @Input()
  todo?: Todo;

  @Output()
  edit = new EventEmitter<string>();

  ngOnInit() {
    if (this.todo) {
      this.name = this.todo.name;
    }
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.name = this.todo?.name
  }
}
