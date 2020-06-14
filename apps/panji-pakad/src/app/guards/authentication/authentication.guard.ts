import { CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

export class AuthenticationGuard implements CanLoad {

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    if ()
  }

}