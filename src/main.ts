import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/config';
bootstrapApplication(App, config).catch(console.error);
