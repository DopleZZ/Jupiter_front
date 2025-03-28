import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BarComponent } from "./lists/left/bar/bar.component";
import { Bar1Component } from "./lists/mid/bar1/bar1.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BarComponent, Bar1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jupiterium';
}
