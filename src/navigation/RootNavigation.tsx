import {Link} from 'react-router-dom';

// Interface defining the structure of navigation routes
interface RootNavigationRoute {
  title: string; // Title of the route
  to: string; // Path to navigate to
}

// Array of navigation routes
const routes: RootNavigationRoute[] = [
  {
    title: 'Map', // Title of the route
    to: '/map', // Path to navigate to
  },
];

// RootNavigation component definition
export const RootNavigation = () => {
  return (
    <>
      {/* Header section */}
      <header className="px-6 pb-6 pt-12 flex items-baseline gap-4 bg-blurry-white">
        <h1 className="text-4xl">Dzajlopment</h1> {/* Company name */}
        <p>28 Smitty Storages, LA, B</p> {/* Company address */}
      </header>
      {/* Navigation section */}
      <nav className="bg-white p-6 gap-6">
        <ul className="flex">
          {/* Rendering navigation links */}
          {routes.map((route) => (
            <li
              key={route.to}
              className="border-r-2 last:border-r-0 pl-6 first:pl-0 border-separator pr-6">
              {/* Navigation link */}
              <Link to={route.to}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
