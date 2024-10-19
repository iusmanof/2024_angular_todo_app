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
});
