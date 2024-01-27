import {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import {ITodo} from '../../types/types';

const TodoItemPage = () => {
    const [todoItem, setTodoItem] = useState<ITodo | null>(null);
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const fetchTodoItem = async () => {
        try {
            const res = await axios<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id);
            setTodoItem(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchTodoItem();
    }, []);

    const handleGoBack = () => {
        navigate(location.state ?? '/todos');
    };

    return (
        <div>
            <button onClick={handleGoBack}>go back</button>
            <p>{todoItem?.id}</p>
            <p>{todoItem?.title}</p>
        </div>
    );
};

export {TodoItemPage};