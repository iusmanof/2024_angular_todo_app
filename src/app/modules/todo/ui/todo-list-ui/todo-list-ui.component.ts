import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../model/todo';

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
  edit = new EventEmitter<{id: number, name: string}>()  
    
  onDelete(id: number) {
    this.delete.emit(id)
  }

  onToggle(id: number) {
    this.toggle.emit(id)
  }

  onEdit(name: string, id: number) {
    this.editIds = this.editIds.filter(el => el !== id)
    this.edit.emit({id, name})
  }

  onEditMode(id: number){
    this.editIds.push(id)
  }
}
