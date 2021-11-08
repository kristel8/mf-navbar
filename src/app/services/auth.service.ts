import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UtilsTemp } from '../shared-elements/utils/entities/utils-temp';
import { User } from '../shared-elements/utils/entities/user';
import { TripleDES } from '../shared-elements/utils/entities/triple-des';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string | undefined;

  private _usuario: User | undefined;
  private _token: string | undefined;

  private _app: string | undefined;
  private _apps: string | undefined;


  urlEndPointTemp: string = `${environment.urlGateway}${UtilsTemp.mainRouteSecury}`;

  urlEndPointUserWeb: string = `${environment.urlGateway}${UtilsTemp.SEC_USER_WEB_MAIN}`;

  constructor(private http: HttpClient, public router: Router) { }

  login(data: User): Observable<any> {
    const userLogin: User = data;
    // const passwordCipher = TripleDES.cipher(data.password, TripleDES.key1, TripleDES.key2, TripleDES.key3);
    // userLogin.password = passwordCipher;

    // console.log("Login Service");
    // console.log(JSON.stringify(userLogin));

    return this.http.post(this.urlEndPointUserWeb + UtilsTemp.SEC_AUTH_SINGIN_OAUTH, userLogin);
    // return this.http.post(this.urlEndPoint + UtilsTemp.SEC_AUTH_SINGIN, userLogin);
  }

  loginToOAuth(data: User): Observable<any> {
    const headers = new HttpHeaders(
      {
        'Authorization':'Basic ZnJvbnRlbmRhcHA6MTIzNDU2',
        'Content-Type':'application/x-www-form-urlencoded'
      }
    );

    const userLogin: User = data;
    const passwordCipher = TripleDES.cipher(data.password, TripleDES.key1, TripleDES.key2, TripleDES.key3);
    userLogin.password = passwordCipher;

    const body = new HttpParams()
    .set('username', userLogin.username!)
    .set('password', userLogin.password)
    .set('grant_type','password');

    return this.http.post( this.urlEndPointTemp + UtilsTemp.SEC_AUTH_OAUTH_PREFIJO, body, {headers: headers});
  }

  logout(): Observable<any> {
    return this.http.post(this.urlEndPointUserWeb + UtilsTemp.SEC_AUTH_LOGOUT, null);
  }

  // listAuthType(): Observable<AuthType> {
  //   return this.http.get<AuthType>(this.urlEndPoint + UtilsTemp.SEC_AUTH_TYPE_PREFIJO);
  // }

  // meotodo generico para obtener datos del usuario almacenado en sesionstorage
  public get usuario(): User {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('auth-user') != null) {
      this._usuario = JSON.parse(sessionStorage.getItem('auth-user')!) as User
      return this._usuario;
    }
    return new User();
  }

  public get app(): any {
    if (this._app != null) {
      return this._app
    } else if (sessionStorage.getItem('auth-user') != null) {
      const userInfo = JSON.parse(sessionStorage.getItem('auth-user')!);
      let items = userInfo.listRols as any[];
      const app = items[0].application;
      return app;
    }
  }

  public get apps(): any {
    if (this._apps != null) {
      return this._apps
    } else if (sessionStorage.getItem('auth-user') != null) {
      const userInfo = JSON.parse(sessionStorage.getItem('auth-user')!);
      let items = userInfo.listRols as any[];

      if (items[0].application == "0"){
        const app = items[0].application;
        return app;
      }else{
        return [...new Set(items.map(item => item.application))].join(',');
      }
    }
  }

  public getApp():string{
    let appCurrent:string = (JSON.parse(sessionStorage.getItem('auth-user')!) as User)
                            .listRols[0]
                            .application;

    return appCurrent == '0' ?
           JSON.parse(localStorage.getItem("apps")!).map((item: { capApplicationID: any; })=>item.capApplicationID).reduce((acc: any, act: any)=>acc+";"+act)
           : appCurrent;
  }

  // metodo generico para obtener token del session storage
  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('auth-token') != null) {
      this._token = sessionStorage.getItem('auth-token')!;
      return this._token;
    }
    return null!;
  }

  // pregunto si esta autenticado para obtener la seccion payload de un token
  isAuthenticated(): boolean {
    // console.log("Si es autenticado");
    let payload = this.obtenerDatosToken(this.token);
    // console.log("Payload");
    // console.log(JSON.stringify(payload));
    if (payload != null && payload.sub && payload.sub.length > 0) {
      return true;
    }
    return false;
  }

  // obtengo datos de token
  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }

  signOut(): void {
    this._token = undefined;
    this._usuario = undefined;
    window.sessionStorage.clear();
  }

  forgotPassword(user: string, action: string):Observable<any>{

    return this.http.get<any>(this.urlEndPointUserWeb  + UtilsTemp.SEC_AUTH_PREFIJO + UtilsTemp.SEC_AUTH_FORGOT_PASSWORD.replace(':USER', user), { params: new HttpParams().set('action', action) });

    // return this.http.get<any>(this.urlEndPointUserWeb + UtilsTemp.SEC_AUTH_PREFIJO + UtilsTemp.SEC_AUTH_FORGOT_PASSWORD.replace(':USER', user), { params: new HttpParams().set('action', action) });
  }

  forgotPasswordMail(user:any, action: string):Observable<any>{

    return this.http.post<any>(this.urlEndPointUserWeb + UtilsTemp.SEC_AUTH_PREFIJO + UtilsTemp.SEC_AUTH_FORGOT_PASSWORD_MAIL, user,{ params: new HttpParams().set('action', action) });

    // return this.http.post<any>(this.urlEndPointUserWeb + UtilsTemp.SEC_AUTH_PREFIJO + UtilsTemp.SEC_AUTH_FORGOT_PASSWORD_MAIL, user,{ params: new HttpParams().set('action', action) });
  }
  ///return this.http.post(this.urlEndPoint + UtilsTemp.SEC_AUTH_SINGIN, userLogin);
}
