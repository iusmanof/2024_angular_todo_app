import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { By } from '@angular/platform-browser';
import { PriorityState } from '../../model/todo';

describe('TodoListItemComponent', () => {
  let component: TodoListItemComponent;
  let fixture: ComponentFixture<TodoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the todo name correctly', () => {
    component.todo = { id: 100, name: 'test completed', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true };
    fixture.detectChanges()

    const title = fixture.debugElement.query(By.css('.todo-list-item__title'))
    expect(title.nativeElement.textContent).toContain('test completed')
  })

  it('should call onEditMode when edit is clicked', () => {
    spyOn(component, 'onEditMode');
    component.todo = { id: 100, name: 'test completed', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: false };
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.todo-list-item__edit'));
    editButton.triggerEventHandler('click', null);

    expect(component.onEditMode).toHaveBeenCalled();
  });

  it('should call onDelete when delete is clecked', () =>{
    spyOn(component, 'onDelete')
    component.todo = { id: 100, name: 'test completed', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true },
    fixture.detectChanges()

    const deleteBtn = fixture.debugElement.query(By.css('.todo-list-item__delete'))
    deleteBtn.triggerEventHandler('click', null)
    expect(component.onDelete).toHaveBeenCalled()
  })


  it('should onToggle clicked', () => {
    spyOn(component ,'onToggle')
    component.todo = { id: 100, name: 'test completed', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true };
    fixture.detectChanges()

    const toggleBtn = fixture.debugElement.query(By.css('.todo-list-item__checkbox'))
    toggleBtn.triggerEventHandler('click', null)

    expect(component.onToggle).toHaveBeenCalled()
  })
});
