import { Todo } from "../model/todo";
import { todoActions, todoActionsType, } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
    idIncrement: number;
    todoList: Todo[];
}

const initailState: TodoState = {
    idIncrement: 1,
    todoList: [
        {id: 100, name: 'test completed',  completed: true},
        {id: 200, name: 'test in work',  completed: false},
    ]
}

export const todoReducer = (state = initailState , action: todoActions ) => {
    switch (action.type){
        case todoActionsType.create:
            return {
                ...state,
                idIncrement: state.idIncrement + 1,
                todoList: [
                    ...state.todoList,
                    {
                        id: state.idIncrement,
                        name: action.payload.name,
                        completed: false
                    }
                ]
            }
        case todoActionsType.delete:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
            }
        case todoActionsType.toggle:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo )
            }
        case todoActionsType.edit:
            return {
              ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name } : todo)
            };
        case todoActionsType.load:
            return {
                ...action.payload.state,
            };
        default:
            return state
    }
   
} 