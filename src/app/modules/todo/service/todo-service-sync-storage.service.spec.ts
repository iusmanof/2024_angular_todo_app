import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { TodoServiceSyncStorageService, TODO_LOCALSTORAGE_KEY } from './todo-service-sync-storage.service';
import { TodoLoadStateAction } from '../store/todo.actions';
import { TodoState } from '../store/todo.reducer';

describe('TodoServiceSyncStorageService', () => {
  let service: TodoServiceSyncStorageService;
  let store: jasmine.SpyObj<Store<TodoState>>;

  beforeEach(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'pipe']);
    storeSpy.pipe.and.returnValue(of({})); // Mocking the store state as an observable

    TestBed.configureTestingModule({
      providers: [
        TodoServiceSyncStorageService,
        { provide: Store, useValue: storeSpy }
      ]
    });

    service = TestBed.inject(TodoServiceSyncStorageService);
    store = TestBed.inject(Store) as jasmine.SpyObj<Store<TodoState>>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize and load state from localStorage', () => {
    const mockState = { todos: [] };
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockState)); // Mock localStorage
    spyOn(store, 'dispatch'); // Spy on the dispatch method
  
    service.init(); // Initialize the service
  
    // Verify that localStorage.getItem was called with the correct key
    expect(localStorage.getItem).toHaveBeenCalledWith(TODO_LOCALSTORAGE_KEY);
  
    // Check that dispatch was called with an action containing the loaded state
    expect(store.dispatch).toHaveBeenCalledWith(jasmine.any(TodoLoadStateAction));
  
    // Check that the action dispatched contains the correct payload
    const action = store.dispatch.calls.mostRecent().args[0];
    expect(action).toEqual(jasmine.any(TodoLoadStateAction)); // Ensure it's the right action type
    expect(action.payload).toEqual(mockState); // Ensure the state is what we expect
  });
});
