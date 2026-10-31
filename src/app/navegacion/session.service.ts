import { Injectable, signal } from '@angular/core';
@Injectable({providedIn:'root'})
export class DemoSession { allowed=signal(false); }
