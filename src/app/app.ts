import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({selector:'app-root',imports:[RouterLink,RouterLinkActive,RouterOutlet],changeDetection:ChangeDetectionStrategy.OnPush,template:`
<header><small>LABORATORIO / ANGULAR</small><h1>De la pregunta a la práctica</h1><p>Ejemplos interactivos basados en las 50 preguntas del documento.</p></header>
<nav aria-label="Ejemplos"><a routerLink="/fundamentos" routerLinkActive="active">Fundamentos</a><a routerLink="/formularios" routerLinkActive="active">Formularios</a><a routerLink="/datos" routerLinkActive="active">Datos y HTTP</a><a routerLink="/ciclo-vida" routerLinkActive="active">Ciclo de vida</a><a routerLink="/privado" routerLinkActive="active">Ruta con guard</a><a routerLink="/clasico" routerLinkActive="active">Angular clásico</a></nav><main><router-outlet /></main><footer>Demostración local · Sin autenticación ni backend de producción</footer>`})
export class App {}
