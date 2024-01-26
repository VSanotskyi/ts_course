import React, {FC, useState} from 'react';
import {addTodo} from '../store/todo/todoSlice';

interface IHandleAddTodo {
    handleAddTodo: (p: string) => void;
}

const AddTodoForm: FC<IHandleAddTodo> = ({handleAddTodo}) => {
    const [todoText, setTodoText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {target: {value}} = e;

        setTodoText(value);
    };

    const handleClick = () => {
        handleAddTodo(todoText);
        setTodoText('');
    };

    return (
        <div>
            <input type="text"
                   placeholder="new todo"
                   value={todoText}
                   onChange={handleChange}
            />
            <button onClick={handleClick}>Add todo</button>
        </div>
    );
};

export {AddTodoForm};