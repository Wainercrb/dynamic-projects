import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DemoSession } from './session.service';
@Component({template:`<h2>Acceso de demostración</h2><p>Preguntas 13, 28 y 31. El guard redirigió aquí porque el permiso local está desactivado.</p><p>Este permiso se pierde al recargar y no autentica usuarios. Un servidor debe autorizar cada operación sensible.</p><button (click)="enter()">Activar permiso de ejemplo</button>`})
export default class Access { session=inject(DemoSession); router=inject(Router); enter(){this.session.allowed.set(true);void this.router.navigateByUrl('/privado');} }
