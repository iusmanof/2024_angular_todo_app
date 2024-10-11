import { Injectable } from '@angular/core';
import { TodoState } from '../store/todo.reducer';
import { Store, select } from '@ngrx/store';
import { filter } from 'rxjs/operators'
import { todoFeatureSelector } from '../store/todo.selectors';
import { TodoLoadStateAction } from '../store/todo.actions';

export const TODO_LOCALSTORAGE_KEY = 'todo'

@Injectable({
  providedIn: 'root'
})
export class TodoServiceSyncStorageService {
  private isInit = false;

  constructor(private store$: Store<TodoState>) { }

  init() {
    if (this.isInit) return

    this.isInit = true;
    this.loadFromStorage()

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(TODO_LOCALSTORAGE_KEY, JSON.stringify(state))
    })

    window.addEventListener('storage', () => this.loadFromStorage() )
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(TODO_LOCALSTORAGE_KEY)
    if (storageState) {
      this.store$.dispatch(new TodoLoadStateAction({ state: JSON.parse(storageState) }))
    }
  }
}
