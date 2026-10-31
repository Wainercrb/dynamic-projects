import { isPlatformBrowser } from '@angular/common';
import { catchError, map, of } from 'rxjs';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router, Routes } from '@angular/router';
import { DemoSession } from './session.service';
const demoGuard: CanActivateFn = () => {
  const session = inject(DemoSession);
  const router = inject(Router);
  const denied = router.createUrlTree(['/acceso']);
  if (!isPlatformBrowser(inject(PLATFORM_ID))) return denied;
  return session.refresh().pipe(
    map((s) => (s.user ? true : denied)),
    catchError(() => of(denied)),
  );
};
export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'fundamentos' },
  { path: 'fundamentos', loadComponent: () => import('../fundamentos/page') },
  { path: 'formularios', loadComponent: () => import('../formularios/page') },
  { path: 'datos', loadComponent: () => import('../datos/page') },
  { path: 'ciclo-vida', loadComponent: () => import('../ciclo-vida/page') },
  { path: 'acceso', loadComponent: () => import('./access') },
  { path: 'privado', canActivate: [demoGuard], loadComponent: () => import('./private') },
  {
    path: 'clasico',
    loadChildren: () => import('../angular-clasico/module').then((m) => m.AngularClasicoModule),
  },
  { path: 'material', loadComponent: () => import('../material/page') },
  { path: '**', redirectTo: 'fundamentos' },
];
