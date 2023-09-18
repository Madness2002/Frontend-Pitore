import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {finalize, Observable} from "rxjs";
import {UserService} from "../usuario/user.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
private _activeRequest=0;
  constructor(private userService:UserService,private ngxService: NgxUiLoaderService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this._activeRequest==0) this.ngxService.start();
    this._activeRequest++;
    let authReq = req;
    const token = this.userService.getToken();
    console.log("si tiene token");
    if(token != null){
      authReq = authReq.clone({
        setHeaders : {Authorization: `Bearer ${token}` }
      })
    }
    return next.handle(authReq).pipe(finalize(()=> this._topLoader()));
  }

 public _topLoader(){
this._activeRequest--;
   if (this._activeRequest==0) this.ngxService.stop()
  }
}



export const authInterceptorProviders = [
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }
]
