import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.scss']
})
export class ModuleOneComponent {

}
