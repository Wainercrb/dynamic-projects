import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { DemoSession } from './session.service';
@Component({
  imports: [FormsModule, MatButtonModule],
  template: `<h2>Registro e inicio de sesión</h2>
    <p>
      Cuenta local real con contraseña hasheada y sesión del servidor. Los datos se pierden al
      reiniciar el laboratorio.
    </p>
    <form #form="ngForm" (ngSubmit)="login()">
      <label
        >Usuario
        <input
          name="username"
          [(ngModel)]="username"
          required
          pattern="[a-zA-Z0-9_-]{3,40}"
          autocomplete="username" /></label
      ><label
        >Contraseña
        <input
          name="password"
          type="password"
          [(ngModel)]="password"
          required
          minlength="12"
          maxlength="128"
          autocomplete="current-password" /></label
      ><button
        mat-flat-button
        type="button"
        [disabled]="form.invalid || busy()"
        (click)="register()"
      >
        Registrar cuenta</button
      ><button mat-flat-button [disabled]="form.invalid || busy()">Iniciar sesión</button>
    </form>
    <p role="status">{{ message() }}</p>`,
})
export default class Access {
  session = inject(DemoSession);
  router = inject(Router);
  username = '';
  password = '';
  message = signal('');
  busy = signal(false);
  register() {
    this.busy.set(true);
    this.session.register(this.username, this.password).subscribe({
      next: () => {
        this.busy.set(false);
        this.message.set('Cuenta registrada. Ya puedes iniciar sesión.');
      },
      error: () => {
        this.busy.set(false);
        this.message.set('No se pudo registrar. Revisa los datos o utiliza otro usuario.');
      },
    });
  }
  login() {
    this.busy.set(true);
    this.session.login(this.username, this.password).subscribe({
      next: () => {
        this.busy.set(false);
        this.password = '';
        void this.router.navigateByUrl('/privado');
      },
      error: () => {
        this.busy.set(false);
        this.message.set('No se pudo iniciar sesión. Revisa las credenciales.');
      },
    });
  }
}
