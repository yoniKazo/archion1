import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class JsonHeaderInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  

      const headers = req.headers.set('Content-Type', 'application/json');

   

    let cloneReq = req.clone({ headers });

    cloneReq = cloneReq.clone({
      withCredentials: true
    });

    // send the request to the next handler.
    return next.handle(cloneReq);
  }
}
