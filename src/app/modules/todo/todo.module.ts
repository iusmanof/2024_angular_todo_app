import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TODO_REDUCER_NODE, todoReducer } from './store/todo.reducer';
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import { RouterModule } from '@angular/router';
import { routes } from '../routing/routes';
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import { FormsModule } from '@angular/forms';
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemComponent } from './ui/todo-list-item/todo-list-item.component';
import { TodoListItemEditComponent } from './ui/todo-list-item-edit/todo-list-item-edit.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component'


@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemComponent,
    TodoListItemEditComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [TodoWidgetComponent],
})
export class TodoModule {}
