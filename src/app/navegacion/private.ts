import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DemoSession } from './session.service';
@Component({
  template: `<h2>Ruta protegida</h2>
    <p role="status">{{ message() }}</p>
    <button (click)="leave()">Cerrar sesión</button>`,
})
export default class Private {
  session = inject(DemoSession);
  router = inject(Router);
  http = inject(HttpClient);
  message = signal('Cargando datos privados…');
  constructor() {
    this.http.get<{ message: string }>('/api/private').subscribe({
      next: (r) => this.message.set(r.message),
      error: () => this.message.set('El servidor denegó el acceso'),
    });
  }
  leave() {
    this.session.logout().subscribe({
      next: () => void this.router.navigateByUrl('/acceso'),
      error: () => this.message.set('No se pudo cerrar la sesión; reintenta'),
    });
  }
}
