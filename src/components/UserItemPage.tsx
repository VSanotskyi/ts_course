import {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

import {IUser} from '../../types/types';

const UserItemPage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const res = await axios<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(res.data);
        } catch (e) {
            alert(e);
        }
    };

    const handleClickBack = () => {
        navigate(location.state ?? '/users');
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div>
            <button onClick={handleClickBack}>go back</button>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
        </div>
    );
};

export {UserItemPage};