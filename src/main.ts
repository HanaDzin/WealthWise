/*import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent).catch((err) => console.error(err));*/

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);
