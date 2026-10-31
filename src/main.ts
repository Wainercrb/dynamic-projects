import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { routes } from './app/navegacion/routes';
bootstrapApplication(App, { providers: [provideRouter(routes), provideHttpClient()] }).catch(console.error);
