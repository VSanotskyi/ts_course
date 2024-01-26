import {AddTodoForm} from './AddTodoForm';
import {useState} from 'react';
import {TodoItem} from './TodoItem';

export type ItemType = { id: number, text: string }

const App = () => {
    const [todoList, setTodoList] = useState<ItemType[]>([]);

    const handleAddTodo = (todo: string) => {
        const newTodo = {id: Math.random(), text: todo};
        setTodoList([...todoList, newTodo]);
    };

    const handleDeleteTodo = (id: number) => {
        setTodoList(prev => prev.filter(el => el.id !== id));
    };

    return (
        <div>
            <AddTodoForm handleAddTodo={handleAddTodo}/>
            {
                todoList.map(el => (
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