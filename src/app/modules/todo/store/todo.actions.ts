import { Action } from "@ngrx/store";
import { TodoState } from "./todo.reducer";
import { PriorityState } from "../model/todo";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item',
  toggle = '[TODO] toggle todo item',
  edit = '[TODO] edit todo item',
  load = '[TODO] load todo state',
}

export class TodoCreateAction implements Action {
    readonly type = todoActionsType.create;
    constructor(public payload: {name: string , text: string, priority: PriorityState}){
    }
}

export class TodoDeleteAction implements Action {
    readonly type = todoActionsType.delete;
    constructor(public payload: {id: number}){
    }
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;
  constructor(public payload: { id: number }) {}
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;
  constructor(public payload: { id: number, name: string, text: string, priority: PriorityState }) {}
}

export class TodoLoadStateAction implements Action {
  readonly type = todoActionsType.load;
  constructor(public payload: { state: TodoState }) {}
}

export type todoActions = TodoCreateAction | TodoDeleteAction | TodoToggleAction | TodoEditAction | TodoLoadStateAction;