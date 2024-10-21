export interface Todo {
    id: number;
    name: string;
    text: string;
    priority: PriorityState
    completed: boolean;
}

export interface TodoModelCreate {
    name: string;
    text: string;
    priority: PriorityState
}

export interface TodoModelEdit {
  name: string;
  text: string;
  priority: PriorityState;
}

export enum PriorityState {
    low = 'low', 
    medium = 'medium',
    high = 'high'
}

export interface EditPayload {
  id: number;
  name: string;
  text: string;
  priority: PriorityState;
}