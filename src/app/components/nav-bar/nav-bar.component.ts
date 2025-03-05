import { Component } from '@angular/core';
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
  menus = [
    { label: 'Dashboard', path: PATHS.DASHBOARD.ROOT },
    { label: 'Gate In', path: PATHS.GATE_IN.ROOT },
    { label: 'Export', path: PATHS.EXPORT.ROOT },
  ];
}
