import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JsonHeaderInterceptor } from './common/jsonHeaderInteceptor';
import { LoaderInterceptorService } from './common/loadingInteceptor';
//import { LoaderInterceptorService } from './common/loadingInteceptor';
//import { CredentialsInteceptor } from './common/CredentialsInteceptor';



/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: JsonHeaderInterceptor, multi: true },
 { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true },
 

];
