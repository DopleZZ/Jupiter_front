import { Component } from '@angular/core';
import { CellComponent } from "../cell/cell.component";

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [CellComponent],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent {

}
