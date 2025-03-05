import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const PAGE_NOT_FOUND_ROUTES: Route[] = [
  {
    path: PATHS.PAGE_NOT_FOUND,
    loadComponent: () => import('..').then((c) => c.PageNotFoundComponent),
  },
];
