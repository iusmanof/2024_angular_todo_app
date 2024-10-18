import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { By } from '@angular/platform-browser';

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
    component.todo = { id: 1, name: "Task 1", completed: false};
    fixture.detectChanges()

    const title = fixture.debugElement.query(By.css('.todo-list-item__title'))
    expect(title.nativeElement.textContent).toContain('Task 1')
  })

  it('should call onEditMode when edit is clicked', () => {
    spyOn(component, 'onEditMode');
    component.todo = { id: 1, name: 'Test 1', completed: false };
    fixture.detectChanges();

    const editButton = fixture.debugElement.query(By.css('.todo-list-item__edit'));
    editButton.triggerEventHandler('click', null);

    expect(component.onEditMode).toHaveBeenCalled();
  });

  it('should call onDelete when delete is clecked', () =>{
    spyOn(component, 'onDelete')
    component.todo = {id: 2, name: 'Task 2 (del)', completed: true }
    fixture.detectChanges()

    const deleteBtn = fixture.debugElement.query(By.css('.todo-list-item__delete'))
    deleteBtn.triggerEventHandler('click', null)
    expect(component.onDelete).toHaveBeenCalled()
  })


  it('should onToggle clicked', () => {
    spyOn(component ,'onToggle')
    component.todo = {id: 3, name: "task 3 toggle", completed: false}
    fixture.detectChanges()

    const toggleBtn = fixture.debugElement.query(By.css('.todo-list-item__checkbox'))
    toggleBtn.triggerEventHandler('click', null)

    expect(component.onToggle).toHaveBeenCalled()
  })
});
