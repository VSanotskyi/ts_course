import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    listStyle: 'none',
                }}
                >
                    <li>
                        <NavLink style={{textDecoration: 'none'}}
                                 to="/"
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}}
                                 to="/users"
                        >Users</NavLink>
                    </li>
                    <li>
                        <NavLink style={{textDecoration: 'none'}}
                                 to="/todos"
                        >Todos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export {Header};