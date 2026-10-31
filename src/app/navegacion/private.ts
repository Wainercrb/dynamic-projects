import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DemoSession } from './session.service';
@Component({template:`<h2>Ruta protegida de ejemplo</h2><p>El guard permitió la navegación. Las páginas se cargan bajo demanda con loadComponent.</p><button (click)="leave()">Revocar permiso y salir</button>`})
export default class Private { session=inject(DemoSession); router=inject(Router); leave(){this.session.allowed.set(false);void this.router.navigateByUrl('/acceso');} }
