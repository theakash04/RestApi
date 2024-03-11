import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Activites, HomePage, Resource, CalmMind, YogaFlow, HHaven, BookRec } from './Components/index.js'

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
            element: <Activites />,
        },
        {
            path: '/activites/calm-mind',
            element: <CalmMind />
        },
        {
            path: '/activites/harmony-haven',
            element: <HHaven />
        },
        {
            path: '/activites/yoga-flow',
            element: <YogaFlow />
        },
        {
            path: '/activites/book-recommendations',
            element: <BookRec />
        },
        {
            path: '/Resources',
            element: <Resource />
        },
    ]
}])




ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
