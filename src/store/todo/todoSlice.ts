import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ITodo {
    id: number;
    text: string;
}

const initialState: ITodo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            console.log(action);
            const newTodo = {
                id: Math.random(),
                text: action.payload,
            };
            state.push(newTodo);
        },

        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
    },
});

export const {addTodo, deleteTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;