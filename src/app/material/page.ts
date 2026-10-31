import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  imports: [MatButtonModule, MatCardModule, MatSlideToggleModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>Angular Material y SSR</h2>
    <mat-card
      ><mat-card-header><mat-card-title>Componentes accesibles</mat-card-title></mat-card-header
      ><mat-card-content
        ><p>
          Pregunta 29: tarjeta, botón y switch con tema Material. Esta página se renderiza en el
          servidor antes de ejecutar JavaScript.
        </p>
        <mat-slide-toggle [checked]="enabled()" (change)="enabled.set($event.checked)"
          >Activar práctica</mat-slide-toggle
        >
        <p role="status">
          {{ enabled() ? 'Práctica activada' : 'Práctica desactivada' }}
        </p></mat-card-content
      ><mat-card-actions
        ><button mat-flat-button [disabled]="!enabled()" (click)="count.update(increment)">
          Completar práctica
        </button></mat-card-actions
      ></mat-card
    >
    <p>Prácticas completadas: {{ count() }}</p>`,
})
export default class MaterialPage {
  enabled = signal(false);
  count = signal(0);
  increment = (n: number) => n + 1;
}
