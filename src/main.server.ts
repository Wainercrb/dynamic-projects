import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, RenderMode } from '@angular/ssr';
import { App } from './app/app';
import { config } from './app/config';
const serverConfig = mergeApplicationConfig(config, {
  providers: [
    provideServerRendering(
      withRoutes([
        { path: 'fundamentos', renderMode: RenderMode.Server },
        { path: 'material', renderMode: RenderMode.Server },
        { path: '**', renderMode: RenderMode.Client },
      ]),
    ),
  ],
});
export default (context: BootstrapContext) => bootstrapApplication(App, serverConfig, context);
