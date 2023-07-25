import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import App from './Main';
import Notesgpt from './notesgpt';
import App2 from './qrai';
import reportWebVitals from './reportWebVitals';
import Signin from './signin';
import Signup from './signup';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/qrai",
    element: <App2 />,
  },
  {
    path: "/notesgpt",
    element: <Notesgpt />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();