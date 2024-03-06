import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Activites, HomePage, Resource } from './Components/index.js'

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
        {
            path: '',
            element: <HomePage />
        },
        {
            path: '/activites',
            element: <Activites />
        },
        {
            path: '/Resources',
            element: <Resource />
        }
    ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
