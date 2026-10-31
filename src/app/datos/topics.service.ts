import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Topic { id:number; title:string; }
@Injectable({providedIn:'root'})
export class TopicsService { private http=inject(HttpClient); load(fail=false){return this.http.get<Topic[]>(fail?'/missing-demo.json':'/topics.json');} }
