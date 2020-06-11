import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor() { }

  set(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    return JSON.parse(sessionStorage.getItem(key));
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }
}