import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ROUTES } from './util';

import * as Components from 'components';
import * as UserScreens from '__user__/views';
import * as AdminScreens from '__admin__/views';

const router = createBrowserRouter([
  { path: ROUTES.client.home, element: <UserScreens.Home /> },
  { path: ROUTES.admin.home, element: <AdminScreens.Home /> },
  { path: ROUTES.notFound, element: <Components.NotFound /> },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export { Routes, ROUTES };
