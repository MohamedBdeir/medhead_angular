import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JWTHandlerService } from './jwthandler.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanLoad {

  constructor(private jwtHandler: JWTHandlerService) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    

    return this.jwtHandler.getAccountType() === "ADMIN"

  }
}
