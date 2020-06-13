import { Injectable } from '@angular/core';
import { SessionStorageService } from '../client-storage/session-storage.service';
import { StorageConstants } from '../../utils/constants/storage.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _sessionStorage: SessionStorageService
  ) { }

  isAuthenticated(): boolean {
    
  }
}