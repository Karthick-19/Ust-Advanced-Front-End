import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// import { FormWComponent } from './app/form-w/form-w.component';
// import { formConfig } from './app/form-w/form.config';
// import { mycomponentConfig } from './app/mycomponent/mycomponent.config';
// import { MycomponentComponent } from './app/mycomponent/mycomponent.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(FormWComponent, formConfig)
//   .catch((err) => console.error(err));
// bootstrapApplication(MycomponentComponent, mycomponentConfig)
//   .catch((err) => console.error(err));
