import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const MODULE_FOUR_ROUTES: Route[] = [
  {
    path: PATHS.MODULE_FOUR.ROOT,
    loadComponent: () => import('..').then((c) => c.ModuleFourComponent),
  },
];
