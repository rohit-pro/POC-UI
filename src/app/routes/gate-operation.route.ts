import { Route } from '@angular/router';
import { PATHS } from '../paths';

export const GATE_OPERATION_ROUTES: Route[] = [
  {
    path: PATHS.GATE_OPERATION.GATE_IN.ROOT,
    loadComponent: () => import('..').then((c) => c.GateInComponent),
  },
  {
    path: PATHS.GATE_OPERATION.GATE_EXIT.ROOT,
    loadComponent: () => import('..').then((c) => c.GateExitComponent),
  },
];
