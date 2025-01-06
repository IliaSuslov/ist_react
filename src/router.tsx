import { createBrowserRouter } from 'react-router';
import Contacts from './pages/contacts';
import Home from './pages/home';
import App from './App';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: '', Component: Home },
      { path: '/contacts', Component: Contacts },
    ],
  },
]);
