import { DASHBOARD_PATHS } from './dashboard.path';
import { EXPORT_PATHS } from './export.path';
import { GATE_IN_PATHS } from './gate-in.path';
import { MODULE_FOUR_PATHS } from './module-four.path';
import { MODULE_ONE_PATHS } from './module-one.path';
import { MODULE_THREE_PATHS } from './module-three.path';
import { MODULE_TWO_PATHS } from './module-two.path';

export const PATHS = {
  DASHBOARD: { ...DASHBOARD_PATHS },
  MODULE_ONE: { ...MODULE_ONE_PATHS },
  MODULE_TWO: { ...MODULE_TWO_PATHS },
  MODULE_THREE: { ...MODULE_THREE_PATHS },
  MODULE_FOUR: { ...MODULE_FOUR_PATHS },
  GATE_IN: { ...GATE_IN_PATHS },
  EXPORT: { ...EXPORT_PATHS },
  PAGE_NOT_FOUND: '**',
};
