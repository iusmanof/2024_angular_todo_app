import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoListUiComponent } from './todo-list-ui.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListItemEditComponent } from '../todo-list-item-edit/todo-list-item-edit.component';
import { PriorityState } from '../../model/todo';

describe('TodoListUiComponent', () => {
  let component: TodoListUiComponent;
  let fixture: ComponentFixture<TodoListUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListUiComponent, TodoListItemComponent, TodoListItemEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of todo items', () => {
    const mockTodos = [
      { id: 1, name: 'test 1', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true },
      { id: 2, name: 'test 2', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true },
      { id: 3, name: 'test 3', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true },
    ];
    component.todoList = mockTodos;
    fixture.detectChanges();

    const todoItems = fixture.debugElement.queryAll(By.css('app-todo-list-item'));
    expect(todoItems.length).toBe(3);
  });
});










