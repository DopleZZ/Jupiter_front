import { Component } from '@angular/core';
import { Cell1Component } from "../cell1/cell1.component";

@Component({
  selector: 'app-bar1',
  standalone: true,
  imports: [Cell1Component],
  templateUrl: './bar1.component.html',
  styleUrl: './bar1.component.css'
})
export class Bar1Component {

}
