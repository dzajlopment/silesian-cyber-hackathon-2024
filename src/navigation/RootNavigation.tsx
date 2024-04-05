import {Link} from 'react-router-dom';

interface RootNavigationRoute {
  title: string;
  to: string;
}

const routes: RootNavigationRoute[] = [
  {
    title: 'Map',
    to: '/map',
  },
  {
    title: 'Live usage',
    to: '/live-usage',
  },
];

export const RootNavigation = () => {
  return (
    <>
      <header className="px-6 pb-6 pt-12 flex items-baseline gap-4 bg-blurry-white">
        <h1 className="text-4xl">Keiko Corp</h1>
        <p>28 Smitty Storages, LA, B</p>
      </header>
      <nav className="bg-white p-6 gap-6">
        <ul className="flex">
          {routes.map((route) => (
            <li
              key={route.to}
              className="border-r-2 last:border-r-0 pl-6 first:pl-0 border-separator pr-6">
              <Link to={route.to}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
