import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const MODULE_ONE_ROUTES: Route[] = [
  {
    path: PATHS.MODULE_ONE.ROOT,
    loadComponent: () => import('..').then((c) => c.ModuleOneComponent),
  },
];
