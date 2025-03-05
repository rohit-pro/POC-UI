import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const DEFAULT_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: PATHS.DASHBOARD.ROOT },
];
