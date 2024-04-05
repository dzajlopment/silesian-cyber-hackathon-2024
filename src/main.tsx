import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import {RootLayout} from './_layout/RootLayout.tsx';
import {LiveUsageScreen} from './_features/live-usage/LiveUsageScreen.tsx';
import {Theme} from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import {MapScreen} from './_features/map';
import {ReportsScreen} from './_features/reports/ReportsScreen.tsx';
import {DeviceModalInfo} from './_features/map';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'map',
        element: (
          <section className="w-full h-full relative flex ">
            <Outlet />
            <MapScreen />
          </section>
        ),
        children: [{path: 'device/:id', element: <DeviceModalInfo />}],
      },
      {
        path: 'live-usage',
        element: <LiveUsageScreen />,
      },
      {
        path: 'reports',
        element: <ReportsScreen />,
      },
    ],
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <Theme className="h-full flex flex-col">
    <RouterProvider router={router} />
  </Theme>,
);
