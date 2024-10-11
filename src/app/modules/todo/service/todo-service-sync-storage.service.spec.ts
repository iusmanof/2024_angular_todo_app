import { TestBed } from '@angular/core/testing';

import { TodoServiceSyncStorageService } from './todo-service-sync-storage.service';

describe('TodoServiceSyncStorageService', () => {
  let service: TodoServiceSyncStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoServiceSyncStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
