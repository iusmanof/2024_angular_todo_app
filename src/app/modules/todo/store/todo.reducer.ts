import { PriorityState, Todo } from "../model/todo";
import { todoActions, todoActionsType, } from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
    idIncrement: number;
    todoList: Todo[];
}

const initailState: TodoState = {
    idIncrement: 1,
    todoList: [
        { id: 100, name: 'test completed', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: true },
        { id: 102, name: 'test in work', text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now', priority: PriorityState.low, completed: false },
    ]
}

export const todoReducer = (state = initailState, action: todoActions) => {
    switch (action.type) {
        case todoActionsType.create:
            return {
                ...state,
                idIncrement: Math.floor(Math.random() * 1000000),
                todoList: [
                    ...state.todoList,
                    {
                        id: state.idIncrement,
                        name: action.payload.name,
                        text: action.payload.text,
                        priority: action.payload.priority,
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
                } : todo)
            }
        case todoActionsType.edit:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? { ...todo, name: action.payload.name, text: action.payload.text, priority: action.payload.priority } : todo)
            };
        case todoActionsType.load:
            return {
                ...action.payload.state,
            };
        default:
            return state
    }

} 