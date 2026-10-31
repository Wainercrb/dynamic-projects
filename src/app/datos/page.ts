import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, catchError, of, switchMap, tap } from 'rxjs';
import { TopicsService } from './topics.service';
@Component({imports:[AsyncPipe],changeDetection:ChangeDetectionStrategy.OnPush,template:`<h2>Datos mediante HTTP</h2><p>Preguntas 16, 23–26 y 35. Petición real a un archivo JSON local.</p><button (click)="reload.next(false)">Cargar datos</button><button (click)="reload.next(true)">Probar error HTTP</button><ul>@for(topic of topics$ | async;track topic.id){<li>{{topic.title}}</li>}</ul><p role="status">{{error()}}</p>`})
export default class DataPage { private service=inject(TopicsService); error=signal(''); reload=new BehaviorSubject(false); topics$=this.reload.pipe(switchMap(fail=>this.service.load(fail).pipe(tap(()=>this.error.set('')),catchError(()=>{this.error.set('No fue posible cargar los datos. Pulsa Cargar datos para reintentar.');return of([]);})))) ; }
