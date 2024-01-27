import {FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {IUser} from '../../types/types';

interface UserItemsProps {
    user: IUser;
}

const UserItem: FC<UserItemsProps> = ({user}) => {
    const location = useLocation();

    return (
        <Link to={`${user.id}`}
              state={location}
        >
            <div style={{
                padding: '15px',
                border: '1px solid black',
                marginBottom: '5px',
            }}
            >
                {user.id}. {user.name}, {user.address.city}
            </div>
        </Link>
    );
};

export {UserItem};