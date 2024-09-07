import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CircularLayoutComponent } from './circular-layout/circular-layout.component';
import { CircularLayout2Component } from './circular-layout2/circular-layout2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CircularLayoutComponent,CircularLayout2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
