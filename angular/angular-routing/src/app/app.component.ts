import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, AboutusComponent, RegisterComponent, FormsModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing';

  constructor(private router: Router) { }

  renderHome(home: string) {
    this.router.navigate(['/home'])
  }
  renderAboutus(aboutus: string) {
    this.router.navigate(['/aboutus'])
  }
  renderRegister(register: string) {
    this.router.navigate(['/register'])
  }
}
