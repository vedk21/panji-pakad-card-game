import { Injectable } from '@angular/core';
import { SessionStorageService } from '../client-storage/session-storage.service';
import { StorageConstants } from '../../utils/constants/storage.constants';
import { HttpClient } from '@angular/common/http';
import { LoginEndpoints } from '../../utils/api/login.endpoints';
import { User, APIResponse } from '@panji-pakad/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private _sessionStorage: SessionStorageService,
    private http: HttpClient
  ) { }

  login(user: User): Observable<APIResponse<User>> {
    return this.http.post<APIResponse<User>>(LoginEndpoints.LOGIN, user);
  }
}
