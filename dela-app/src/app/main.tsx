import ReactDOM from 'react-dom/client';

import './styles/globals.scss';
import '@fontsource/poppins';
import { RouterProvider } from 'atomic-router-react';

import { Pages } from '../pages/index';
import { initializeApp } from './model.ts';
import { router } from './routes';

initializeApp();

const App = (): JSX.Element => {
  return (
    <RouterProvider router={router}>
      <Pages />
    </RouterProvider>
  );
};

export { App };

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
