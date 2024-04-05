import {Outlet} from 'react-router-dom';
import {RootNavigation} from '../navigation/RootNavigation.tsx';

export const RootLayout = () => {
  return (
    <>
      <RootNavigation />
      <Outlet />
    </>
  );
};
