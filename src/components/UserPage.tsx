import {FC, useEffect, useState} from 'react';
import {IUser} from '../../types/types';
import axios from 'axios';
import {UserItem} from './UserItem';
import {List} from './List';


const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUsers = async (): Promise<void> => {
        try {
            const res = await axios<IUser[]>('https://jsonplaceholder.typicode.com/users');
            setUsers(res.data);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <List items={users}
              renderItem={(user: IUser) =>
                  <UserItem key={user.id}
                            user={user}
                  />}
        />
    );
};

export {UserPage};