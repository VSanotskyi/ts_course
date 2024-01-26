import {FC} from 'react';
import {ItemType} from './App';

export interface ITodoItemProps {
    item: ItemType;
    handleDeleteTodo: (id: number) => void;
}

const TodoItem: FC<ITodoItemProps> = ({item, handleDeleteTodo}) => {
    const {id, text} = item;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
        }}
        >
            <p style={{
                padding: 0,
                margin: 0,
            }}
            >{text}</p>
            <button onClick={() => handleDeleteTodo(id)}>Del</button>
        </div>
    );
};

export {TodoItem};