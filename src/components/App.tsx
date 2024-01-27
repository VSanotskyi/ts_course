import {Route, Routes} from 'react-router-dom';

import {Layout} from './Layout';
import {HomePage} from './HomePage';
import {UserPage} from './UserPage';
import {TodoPage} from './TodoPage';
import {UserItemPage} from './UserItemPage';
import {TodoItemPage} from './TodoItemPage';

const App = () => {
    return (
        <Routes>
            <Route path="/"
                   element={<Layout/>}
            >
                <Route
                    index
                    element={<HomePage/>}
                />
                <Route
                    path="/users"
                    element={<UserPage/>}
                />
                <Route
                    path="/users?/:id"
                    element={<UserItemPage/>}
                />
                <Route path="/todos"
                       element={<TodoPage/>}
                />
                <Route path="/todos/:id"
                       element={<TodoItemPage/>}
                />
            </Route>
        </Routes>
    );
};

export {App};