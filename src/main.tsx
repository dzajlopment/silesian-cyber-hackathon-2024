import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout} from './_layout/RootLayout.tsx';
import {LiveUsageScreen} from './_features/live-usage/LiveUsageScreen.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'map',
        element: <h1>Map</h1>,
      },
      {
        path: 'live-usage',
        element: <LiveUsageScreen />,
      },
    ],
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
