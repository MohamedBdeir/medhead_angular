import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JWTHandlerService } from './jwthandler.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {



  constructor(private jwtService: JWTHandlerService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.url !== 'http://127.0.0.1:8080/authenticate') {
      const token = this.jwtService.getJwt();
      if (token) {
        req = req.clone({
          setHeaders: { token: token }
        });
      }
    }

    return next.handle(req);
  }
}
