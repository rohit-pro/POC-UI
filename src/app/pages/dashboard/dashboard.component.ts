import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PATHS } from 'src/app/paths';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  modules = [
    { label: 'Module 1', path: PATHS.MODULE_ONE.ROOT, class: 'blue' },
    { label: 'Module 2', path: PATHS.MODULE_TWO.ROOT, class: 'green' },
    { label: 'Module 3', path: PATHS.MODULE_THREE.ROOT, class: 'orange' },
    { label: 'Module 4', path: PATHS.MODULE_FOUR.ROOT, class: 'red' },
  ];
}
