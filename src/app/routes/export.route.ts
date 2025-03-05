import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const EXPORT_ROUTES: Route[] = [
  {
    path: PATHS.EXPORT.CCIN_ENTRY.ROOT,
    loadComponent: () => import('..').then((c) => c.CcinEntryComponent),
  },
  {
    path: PATHS.EXPORT.CARTING.ROOT,
    loadComponent: () => import('..').then((c) => c.CartingComponent),
  },
];
