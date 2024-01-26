import {AddTodoForm} from './AddTodoForm';
import {useState} from 'react';
import {TodoItem} from './TodoItem';
import {useDispatch, useSelector} from 'react-redux';
import {selectTodos} from '../store/todo/selectors';
import {addTodo, deleteTodo} from '../store/todo/todoSlice';

export type ItemType = { id: number, text: string }

const App = () => {
    const todos = useSelector(selectTodos);
    const dispatch = useDispatch();

    const handleAddTodo = (todoText: string) => {
        dispatch(addTodo(todoText));
    };

    const handleDeleteTodo = (id: number) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div>
            <AddTodoForm handleAddTodo={handleAddTodo}/>
            {
                todos.map(el => (
                    <TodoItem key={el.id}
                              item={el}
                              handleDeleteTodo={handleDeleteTodo}
                    />
                ))
            }
        </div>
    );
};

export {App};