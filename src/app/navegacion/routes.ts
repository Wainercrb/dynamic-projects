import { inject } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { DemoSession } from './session.service';
const demoGuard:CanActivateFn=()=>inject(DemoSession).allowed() || inject(Router).createUrlTree(['/acceso']);
export const routes:Routes=[{path:'',pathMatch:'full',redirectTo:'fundamentos'},{path:'fundamentos',loadComponent:()=>import('../fundamentos/page')},{path:'formularios',loadComponent:()=>import('../formularios/page')},{path:'datos',loadComponent:()=>import('../datos/page')},{path:'ciclo-vida',loadComponent:()=>import('../ciclo-vida/page')},{path:'acceso',loadComponent:()=>import('./access')},{path:'privado',canActivate:[demoGuard],loadComponent:()=>import('./private')},{path:'clasico',loadChildren:()=>import('../legacy/module').then(m=>m.LegacyModule)},{path:'**',redirectTo:'fundamentos'}];
