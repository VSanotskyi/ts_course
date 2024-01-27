import {FC, useEffect, useState} from 'react';
import axios from 'axios';

import {List} from './List';
import {TodoItem} from './TodoItem';
import {ITodo} from '../../types/types';

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    const fetchTodos = async (): Promise<void> => {
        try {
            const res = await axios('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(res.data);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <List items={todos}
              renderItem={(todo: ITodo) => <TodoItem key={todo.id}
                                                     todo={todo}
              />}
        />
    );
};

export {TodoPage};