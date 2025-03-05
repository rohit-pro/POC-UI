import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const MODULE_TWO_ROUTES: Route[] = [
  {
    path: PATHS.MODULE_TWO.ROOT,
    loadComponent: () => import('..').then((c) => c.ModuleTwoComponent),
  },
];
