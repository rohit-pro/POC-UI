import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PATHS } from 'src/app/paths';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  expandedMenu = signal<Map<number, boolean>>(new Map());
  menus = [
    {
      label: 'Dashboard',
      path: PATHS.DASHBOARD.ROOT,
      class: 'ant-design--dashboard-outlined',
    },
    {
      label: 'Gate Operation',
      class: 'material-symbols-light--gate-outline',
      children: [
        { label: 'Gate In', path: PATHS.GATE_OPERATION.GATE_IN.ROOT },
        { label: 'Gate Exit', path: PATHS.GATE_OPERATION.GATE_EXIT.ROOT },
      ],
    },

    {
      label: 'Export',
      class: 'prime--file-export',
      children: [
        { label: 'CCIN Entry', path: PATHS.EXPORT.CCIN_ENTRY.ROOT },
        { label: 'Carting', path: PATHS.EXPORT.CARTING.ROOT },
      ],
    },
  ];

  toggleMenu(index: number) {
    this.expandedMenu.update((expandedMenu) =>
      expandedMenu.set(index, !expandedMenu.get(index))
    );
  }
}
