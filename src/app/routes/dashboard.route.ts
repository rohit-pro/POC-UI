import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const DASHBOARD_ROUTES: Route[] = [
  {
    path: PATHS.DASHBOARD.ROOT,
    loadComponent: () => import('..').then((c) => c.DashboardComponent),
  },
];
