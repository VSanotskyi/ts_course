import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {ITodo} from '../../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const location = useLocation();

    return (
        <Link to={`${todo.id}`}
              state={location.pathname}
        >
            <div style={{border: '1px solid black'}}>
                <h3>{todo.id}. {todo.title}</h3>
            </div>
        </Link>
    );
};

export {TodoItem};