import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, tap } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DemoSession {
  private http = inject(HttpClient);
  user = signal<string | null>(null);
  refresh() {
    return this.http
      .get<{ user: string | null }>('/api/session')
      .pipe(tap((s) => this.user.set(s.user)));
  }
  register(username: string, password: string) {
    return this.http
      .get('/api/csrf')
      .pipe(switchMap(() => this.http.post('/api/register', { username, password })));
  }
  login(username: string, password: string) {
    return this.http.get('/api/csrf').pipe(
      switchMap(() => this.http.post<{ user: string }>('/api/login', { username, password })),
      tap((s) => this.user.set(s.user)),
    );
  }
  logout() {
    return this.http.post('/api/logout', {}).pipe(tap(() => this.user.set(null)));
  }
}
