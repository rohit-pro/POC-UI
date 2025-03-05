import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const MODULE_THREE_ROUTES: Route[] = [
  {
    path: PATHS.MODULE_THREE.ROOT,
    loadComponent: () => import('..').then((c) => c.ModuleThreeComponent),
  },
];
