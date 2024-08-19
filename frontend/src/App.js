// src/App.js
import React from 'react';
import Home from './components/Home';
import AddCard from './components/AddCard'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import "./App.css"

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,  // Layout includes Header, Footer, and Outlet for routed content
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/submit_req', element: <AddCard /> },
      ]
    }
  ]);

  return (
    
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
