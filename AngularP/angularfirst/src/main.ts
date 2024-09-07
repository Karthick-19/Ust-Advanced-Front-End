import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HelloWorld2Component } from './app/hello-world-2/hello-world-2.component';
import { helloconfig2 } from './app/hello-world-2/helloworld-2.config';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(HelloWorld2Component,helloconfig2)
//   .catch((err) => console.error(err));
