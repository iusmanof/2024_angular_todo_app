import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TodoListUiComponent } from './todo-list-ui.component';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { TodoListItemEditComponent } from '../todo-list-item-edit/todo-list-item-edit.component';

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
      { id: 1, name: 'Todo 1', completed: false },
      { id: 2, name: 'Todo 2', completed: false },
      { id: 3, name: 'Todo 3', completed: false },
      { id: 4, name: 'Todo 4', completed: false },
      { id: 5, name: 'Todo 5', completed: false },
      { id: 6, name: 'Todo 6', completed: false },
    ];
    component.todoList = mockTodos;
    fixture.detectChanges();

    const todoItems = fixture.debugElement.queryAll(By.css('app-todo-list-item'));
    expect(todoItems.length).toBe(5); // Expecting only the first 5 items to be displayed
  });
});










