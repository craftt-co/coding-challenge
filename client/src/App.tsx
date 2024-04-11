import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import ProfileView from './container/ProfileList';
import ProfileEdit from './container/ProfileEdit';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    children: [
      {
        path: "/",
        element: <ProfileView />,
      },
      {
        path: "/:profileId",
        element: <ProfileEdit />,
      },
    ]}]);
  return <RouterProvider router={router} />;
}

export default App;
