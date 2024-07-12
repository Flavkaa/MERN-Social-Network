import {RouterProvider} from 'atomic-router-react';

import {Pages} from '../pages/index';
import {router} from './routes';

function App() {
    return (
        <RouterProvider router={router}>
            <Pages/>
        </RouterProvider>
    );
}

export default App;
