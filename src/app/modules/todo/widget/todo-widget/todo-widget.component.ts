import { Component, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoState } from '../../store/todo.reducer';
import { TodoCreateAction, TodoDeleteAction, TodoEditAction, TodoToggleAction } from '../../store/todo.actions';
import { todoListSelector } from '../../store/todo.selectors';
import { Observable } from 'rxjs';
import { EditPayload, Todo, TodoModelCreate } from '../../model/todo';
import { TodoServiceSyncStorageService } from '../../service/todo-service-sync-storage.service';
import { TodoCreateFormUiComponent } from '../../ui/todo-create-form-ui/todo-create-form-ui.component';



@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrl: './todo-widget.component.scss',
})
export class TodoWidgetComponent {
  @ViewChild('popup') popup!: TodoCreateFormUiComponent; // Use the correct type
  isCreatePopUpOpenFlag: boolean = false;

  open() {
    this.isCreatePopUpOpenFlag = true;
  }

  close() {
    this.isCreatePopUpOpenFlag = false;
  }

  constructor(
    private store: Store<TodoState>,
    private todoStorageSync: TodoServiceSyncStorageService
  ) {
    this.todoList$ = this.store.pipe(select(todoListSelector));
  }

  todoList$: Observable<Todo[]>;

  // todoList$: Observable<Todo[]>  = this.store.pipe(select(todoListSelector));

  ngOnInit() {
    this.todoStorageSync.init()
  }

  // onCreate(name: string) {
  onCreate(newTodo: TodoModelCreate) {
    this.store.dispatch(new TodoCreateAction(newTodo))
    // this.store.dispatch(new TodoCreateAction({ name }));
    this.close();
  }

  onDelete(id: number) {
    this.store.dispatch(new TodoDeleteAction({ id }));
  }

  onToggle(id: number) {
    this.store.dispatch(new TodoToggleAction({ id }));
  }

  onEdit(payload: EditPayload) {
    const { id, name, text, priority } = payload;
    this.store.dispatch(new TodoEditAction({ id, name, text, priority }));
  }

  isCreatePopUpOpen() {
    this.isCreatePopUpOpenFlag = true;
  }
}
