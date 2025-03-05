import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const EXPORT_ROUTES: Route[] = [
  {
    path: PATHS.EXPORT.ROOT,
    loadComponent: () => import('..').then((c) => c.ExportComponent),
  },
];
