import { Route } from '@angular/router';
import { DASHBOARD_ROUTES } from './dashboard.route';
import { MODULE_FOUR_ROUTES } from './module-four.route';
import { MODULE_THREE_ROUTES } from './module-three.route';
import { MODULE_TWO_ROUTES } from './module-two.route';
import { MODULE_ONE_ROUTES } from './module-one.route';
import { DEFAULT_ROUTES } from './default.route';
import { PAGE_NOT_FOUND_ROUTES } from './page-not-found.route';

export const ROUTES: Route[] = [
  ...DEFAULT_ROUTES,
  ...DASHBOARD_ROUTES,
  ...MODULE_FOUR_ROUTES,
  ...MODULE_THREE_ROUTES,
  ...MODULE_TWO_ROUTES,
  ...MODULE_ONE_ROUTES,
  ...PAGE_NOT_FOUND_ROUTES,
];
