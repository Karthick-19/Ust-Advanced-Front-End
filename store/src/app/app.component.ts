import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ItemsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
