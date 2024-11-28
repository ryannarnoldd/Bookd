import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import CreatePost from './pages/PostPage.tsx';
import AllPosts from './pages/AllPosts.tsx';
import PostForm from './components/PostForm.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/create',
        element: <CreatePost />
      },
      {
        path: '/mainfeed',
        element: <AllPosts />
      },
      {
        // There must be a better way of this.
        path: '/posts/update/:id',
        element: <PostForm mode={'update'} />
      }   
    ]
  },
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
