import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriorityState, Todo, TodoModelEdit } from '../../model/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrl: './todo-list-ui.component.scss'
})
export class TodoListUiComponent {

  editIds: number[] = [];
  
  @Input()
  todoList: Todo[] | null = [];

  @Output()
  delete = new EventEmitter<number>()

  @Output()
  toggle = new EventEmitter<number>()

  @Output()
  edit = new EventEmitter<{id: number, name: string, text: string, priority: PriorityState}>()  
    
  onDelete(id: number) {
    this.delete.emit(id)
  }

  onToggle(id: number) {
    this.toggle.emit(id)
  }

  onEdit(obj: TodoModelEdit, id: number) {
    this.editIds = this.editIds.filter(el => el !== id)
    this.edit.emit({
      id,
      name: obj.name,
      text: obj.text,
      priority: obj.priority,
    });
  }

  onEditMode(id: number){
    this.editIds.push(id)
  }
}
