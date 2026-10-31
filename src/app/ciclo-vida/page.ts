import { Component, Input, OnChanges, OnInit, OnDestroy, signal } from '@angular/core';
@Component({
  selector: 'app-lifecycle',
  template: `<section>
    <h3>Componente hijo</h3>
    <p>Entrada: {{ value }}</p>
    <p>{{ changes }} cambios de entrada · {{ seconds() }} segundos montado</p>
  </section>`,
})
export class Lifecycle implements OnChanges, OnInit, OnDestroy {
  @Input() value = 0;
  changes = 0;
  seconds = signal(0);
  private timer?: ReturnType<typeof setInterval>;
  ngOnChanges() {
    this.changes++;
  }
  ngOnInit() {
    this.timer = setInterval(() => this.seconds.update((n) => n + 1), 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
@Component({
  imports: [Lifecycle],
  template: `<h2>Ciclo de vida</h2>
    <p>
      Preguntas 41–44. Cambia la entrada para ejecutar ngOnChanges; desmonta para limpiar el
      intervalo con ngOnDestroy. Al montar se inicia de nuevo con ngOnInit.
    </p>
    <button (click)="value = value + 1">Cambiar entrada</button
    ><button (click)="mounted = !mounted">{{ mounted ? 'Desmontar' : 'Montar' }} hijo</button>
    @if (mounted) {
      <app-lifecycle [value]="value" />
    }`,
})
export default class LifecyclePage {
  value = 0;
  mounted = true;
}
