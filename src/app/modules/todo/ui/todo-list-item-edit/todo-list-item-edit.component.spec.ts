import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoListItemEditComponent } from './todo-list-item-edit.component';

describe('TodoListItemEditComponent', () => {
  let component: TodoListItemEditComponent;
  let fixture: ComponentFixture<TodoListItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoListItemEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onEdit when form is submitted', () => {
    spyOn(component, 'onEdit'); 
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('ngSubmit')); 
    expect(component.onEdit).toHaveBeenCalled();
  });

  it('should enable the OK button when name is filled',() => {
    component.name = "test task"
    fixture.detectChanges()

    const btn = fixture.nativeElement.querySelector('.todo-list-item__button-ok');
    expect(btn.disabled).toBeFalse()
  })

  it('should click the cancel button', () => {
    spyOn(component, 'onCancel')
    const btn = fixture.nativeElement.querySelector('.todo-list-item__button-cancel')
    btn.click()
    expect(component.onCancel).toHaveBeenCalled();
  })

});


