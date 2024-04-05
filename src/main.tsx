import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {RootLayout} from './_layout/RootLayout.tsx';
import {Theme} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import {MapScreen} from './_features/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'map',
        element: (
          <section className="w-full h-full relative">
            <MapScreen />
          </section>
        ),
      },
    ],
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Theme className="h-full flex flex-col">
      <RouterProvider router={router} />
    </Theme>
  </React.StrictMode>,
);
