import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store'; 
import { TodoWidgetComponent } from './todo-widget.component';
import { TodoListUiComponent } from '../../ui/todo-list-ui/todo-list-ui.component';
import { TodoCreateFormUiComponent } from '../../ui/todo-create-form-ui/todo-create-form-ui.component';
import { provideMockStore } from '@ngrx/store/testing'; // Import for mocking store

describe('TodoWidgetComponent', () => {
  let component: TodoWidgetComponent;
  let fixture: ComponentFixture<TodoWidgetComponent>;
  let mockStore: any;

  beforeEach(async () => {
    mockStore = {
      select: jasmine.createSpy('select'),
      dispatch: jasmine.createSpy('dispatch'),
    };

    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [
        TodoWidgetComponent,
        TodoListUiComponent,
        TodoCreateFormUiComponent
      ],
      providers: [
        provideMockStore({ initialState: { todos: [] } }) // Mock store with initial state
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render the todo list UI', () => {
    const todoListUiElement = fixture.nativeElement.querySelector('app-todo-list-ui');
    expect(todoListUiElement).toBeTruthy();
  });

  it('should call open method when button is clicked', () => {
    spyOn(component, 'open').and.callThrough();
    const button = fixture.nativeElement.querySelector('.button-round');
    button.click();
    expect(component.open).toHaveBeenCalled();
  });

  xit('should open create form when button is clicked', () => {
    // const button = fixture.nativeElement.querySelector('.button-round');
    // button.click();
    // fixture.detectChanges();
    
    // expect(component.isCreatePopUpOpenFlag).toBe(true); // Check if the flag is set to true
    // const createFormElement = fixture.nativeElement.querySelector('app-todo-create-form-ui');
    // expect(createFormElement).toBeTruthy(); // Ensure create form is rendered
  });

});
