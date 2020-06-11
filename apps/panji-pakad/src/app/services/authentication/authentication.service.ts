import { Injectable } from '@angular/core';
import { SessionStorageService } from '../client-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _sessionStorage: SessionStorageService
  ) { }

  isAuthenticated(): boolean {
    this.isUserIdPresentInStorage();
    return true;
  }

  private isUserIdPresentInStorage() {
    
  }
}