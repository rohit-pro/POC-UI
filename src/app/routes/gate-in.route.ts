import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const GATE_IN_ROUTES: Route[] = [
  {
    path: PATHS.GATE_IN.ROOT,
    loadComponent: () => import('..').then((c) => c.GateInComponent),
  },
];
