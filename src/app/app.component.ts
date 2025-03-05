import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '.';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'poc';
}
