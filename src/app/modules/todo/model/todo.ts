export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

export enum PriorityState {
    low = 'low', 
    medium = 'medium',
    high = 'high'
}
