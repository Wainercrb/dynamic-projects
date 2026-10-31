import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({standalone:false,template:`<h2>Angular con NgModule</h2><p>Preguntas 12, 14, 15 y 27: declarations, imports, RouterModule.forChild, *ngIf, *ngFor, ngClass y ngStyle.</p><label>Filtro <input [(ngModel)]="filter"></label><button (click)="visible=!visible">Alternar lista clásica</button><ul *ngIf="visible"><li *ngFor="let topic of filtered; trackBy: track" [ngClass]="{selected:topic==='NgModule'}" [ngStyle]="{fontWeight:topic==='NgModule'?'bold':'normal'}">{{topic}}</li></ul><p>Estas directivas están deprecadas en Angular 21; se conservan aquí para estudiar código existente.</p><a href="/legacy-angularjs/index.html">Abrir ejemplo independiente de AngularJS 1.8</a>`})
export class LegacyPage { filter='';visible=true;topics=['NgModule','Directivas estructurales','RouterModule'];get filtered(){return this.topics.filter(t=>t.toLowerCase().includes(this.filter.toLowerCase()));}track(_index:number,topic:string){return topic;} }
@NgModule({declarations:[LegacyPage],imports:[CommonModule,FormsModule,RouterModule.forChild([{path:'',component:LegacyPage}])]})
export class LegacyModule {}
