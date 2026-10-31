import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { Highlight } from '../shared/highlight';
import { Initials } from '../shared/initials';
@Component({
  imports: [FormsModule, UpperCasePipe, Highlight, Initials],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h2>Fundamentos y binding</h2>
    <p>Preguntas 4–8, 10–11, 14–15, 22, 32 y 48.</p>
    <label>Tu nombre <input [(ngModel)]="name" /></label>
    <p appHighlight>Hola, {{ name | uppercase }}. Iniciales: {{ name | initials }}</p>
    <button (click)="visible = !visible" [attr.aria-expanded]="visible">
      {{ visible ? 'Ocultar' : 'Mostrar' }} lista
    </button>
    @if (visible) {
      <ul>
        @for (topic of topics; track topic) {
          <li>{{ topic }}</li>
        }
      </ul>
    }
    <button [disabled]="!name.trim()" (click)="greeting = 'Saludos, ' + name">Saludar</button>
    <p role="status">{{ greeting }}</p>
    <p>
      La interpolación escapa el texto introducido. El estado se actualiza mediante eventos con
      OnPush.
    </p>`,
})
export default class Fundamentals {
  name = 'Ada Lovelace';
  visible = true;
  greeting = '';
  topics = ['Interpolación', 'Property binding', 'Eventos', 'Binding bidireccional'];
}
