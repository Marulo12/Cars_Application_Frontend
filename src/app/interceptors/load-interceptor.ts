import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from 'primeng/api';


@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  constructor(
    private messageService: MessageService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json'
      },
    });

    return next.handle(authReq).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            let response = event.body;
            if (response && response.success == false) {
              if (response.errors) {
                const errors = response.errors as Array<string>;
                errors.forEach((e) => {
                  this.messageService.add({
                    severity: 'error',
                    summary: 'Notificacion',
                    detail: e,
                    key: 'errors',
                  });
                });
              } else {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Notificacion',
                  detail: response.message,
                  key: 'errors',
                });
              }
            }
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 0:
                this.messageService.add({
                  severity: 'error',
                  summary: 'Notificacion',
                  detail: 'Error de conexión',
                  key: 'errors',
                });
                break;

              case 400:
                this.messageService.add({
                  severity: 'error',
                  summary: 'Notificacion',
                  detail:
                    err.error?.Message ||
                    ((err.error as Blob)
                      ? 'No se pudo descargar el archivo'
                      : err.error),
                  key: 'errors',
                });

                break;
              case 404:
                this.messageService.add({
                  severity: 'error',
                  summary: 'Notificacion',
                  detail: 'No se encontró el recurso.',
                  key: 'errors',
                });
                break;
              case 500:
                this.messageService.add({
                  severity: 'error',
                  summary: 'Notificacion',
                  detail: err.error.Message || err.error,
                  key: 'errors',
                });

                break;
              default:
                break;
            }
          }
        }
      )
    );
  }
}
