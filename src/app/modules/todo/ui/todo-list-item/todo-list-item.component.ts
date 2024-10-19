import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PriorityState, Todo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  @Input()
  todo?: Todo;

  @Output()
  delete = new EventEmitter<void>()

  @Output()
  toggle = new EventEmitter<void>()

  @Output()
  edit = new EventEmitter<void>()

  onDelete() {
      this.delete.emit()
  }

  onToggle(event: Event) {
      event.preventDefault();
      this.toggle.emit()
  }

  onEditMode(){
    this.edit.emit();
  }

  getPriorityColor(): string {
    if (this.todo?.priority === PriorityState.low){
      return 'priority-low'
    }

    if (this.todo?.priority === PriorityState.medium){
      return 'priority-medium'
    }

    if (this.todo?.priority === PriorityState.high){
      return 'priority-high'
    }

    return '';
  }
}
