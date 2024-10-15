import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store'; 
import { TodoPageComponent } from './todo-page.component';
import { TodoWidgetComponent } from '../../widget/todo-widget/todo-widget.component';
import { TodoListUiComponent } from '../../ui/todo-list-ui/todo-list-ui.component';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})], 
      declarations: [TodoPageComponent, TodoWidgetComponent, TodoListUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header', () => {
    const headerElement: HTMLElement = fixture.nativeElement.querySelector('.todo-page-container__header');
    expect(headerElement.textContent).toContain('todo app'); 
  });

  it('should render the small text(version)', () => {
    const smallTextElement: HTMLElement = fixture.nativeElement.querySelector('.todo-page-container__small-text');
    expect(smallTextElement.textContent).toContain('v1.0'); 
  });

  it('should contain the todo widget component', () => {
    const todoWidget = fixture.nativeElement.querySelector('app-todo-widget');
    expect(todoWidget).toBeTruthy();
  })
});
