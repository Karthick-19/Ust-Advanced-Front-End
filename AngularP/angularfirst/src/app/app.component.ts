import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld2Component } from './hello-world-2/hello-world-2.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HelloWorld2Component,FormComponent,ListComponent,TemplateDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfirst';
}
