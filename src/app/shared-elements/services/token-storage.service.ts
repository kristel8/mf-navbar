import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Application } from '../utils/entities/application';
import { Menu } from '../utils/entities/menu';
import { Role } from '../utils/entities/role';
import { StatusLogin } from '../utils/entities/status-login';
import { SubMenu } from '../utils/entities/sub-menu';
import { User } from '../utils/entities/user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

const USERS_LOGED = 'list-users-active';
const USERS_TO_SIGN_OUT= 'list-users-to-sign-out';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private IstatusLogin: StatusLogin = { statusLogin: false, changePassword: false };
  private IstatusLoginSubject = new Subject<StatusLogin>();
  public IstatusLoginObservable$ = this.IstatusLoginSubject.asObservable();

  private ALL_APP:string = '0';
  private KEY_APP:string = 'apps';
  private MAIN_APP:string = 'MAIN';

  constructor() { }

  getAppsByRoles() {
    const user: User = this.getUser() as User;
    if(!user || !user.listRols) return null;
    const getApps =  user.listRols.map(x=>x.application);
    return getApps.some(x=> x == "0")? null: getApps;
  }

  signOut() {
    const currentUser = this.getUser();

    const usersLoged: Array<any> = localStorage.getItem(USERS_LOGED) == null ? [] : JSON.parse(localStorage.getItem(USERS_LOGED)!);

    const newUsersLoged = usersLoged.filter(x => x.id !== currentUser.id);

    localStorage.setItem(USERS_LOGED, JSON.stringify(newUsersLoged));

    console.log(USERS_LOGED, newUsersLoged);

    //

    const usersToSignOut: Array<any> = localStorage.getItem(USERS_TO_SIGN_OUT) == null ? [] : JSON.parse(localStorage.getItem(USERS_TO_SIGN_OUT)!);

    const newUsersToSignOut = usersToSignOut.filter(x => x.id != currentUser.id);

    localStorage.setItem(USERS_TO_SIGN_OUT, JSON.stringify(newUsersToSignOut));

    console.log(USERS_TO_SIGN_OUT, newUsersToSignOut);

    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public get routesAngular(): string[]{
    const usuarioValidar = (this.getUser() as User);
    console.log(usuarioValidar)
    if(usuarioValidar && usuarioValidar.listRols && usuarioValidar.listRols.length > 0) {
      const rolesconModulos: Role[] = usuarioValidar.listRols.filter(el=>el.listModules.length>0);

      if(rolesconModulos.length>0) {
        const modulos: Menu[] = rolesconModulos.flatMap(x=>x.listModules);

        if(modulos.length>0){
          const arbolModulo: SubMenu[] = modulos.flatMap(y=>y.listArbolModulo);

          if(arbolModulo.length>0){
            const routesAngular = arbolModulo.flatMap(x=>x.routeAngular);
            return routesAngular;
          }
        }
      }
    }
    return [];
  }

  public saveUser(user: any) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));

    const usersLoged: Array<any> = localStorage.getItem(USERS_LOGED) == null ? [] : JSON.parse(localStorage.getItem(USERS_LOGED)!);

    const usersToSignOut: Array<any> = localStorage.getItem(USERS_TO_SIGN_OUT) == null ? [] : JSON.parse(localStorage.getItem(USERS_TO_SIGN_OUT)!);

    const sameUserIdFinded = usersLoged.find(x => x.id == user.id);

    if (sameUserIdFinded == null) {
      usersLoged.push(user);
      localStorage.setItem(USERS_LOGED, JSON.stringify(usersLoged));
    } else {
      usersToSignOut.push(user);
      localStorage.setItem(USERS_TO_SIGN_OUT, JSON.stringify(usersToSignOut));
    }

    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public checkUserShouldSingOut() {
    const usersToSignOut: Array<any> = localStorage.getItem(USERS_TO_SIGN_OUT) == null ? [] : JSON.parse(localStorage.getItem(USERS_TO_SIGN_OUT)!);

    const currentUser = this.getUser();

    const currentUserExistInList = usersToSignOut.some(x => x.id === currentUser.id);

    if (currentUserExistInList) {
      const newList = usersToSignOut.filter(x => x.id !== currentUser.id);
      localStorage.setItem(USERS_TO_SIGN_OUT, JSON.stringify(newList));
      this.signOut();
      location.reload();
    } else {
      localStorage.setItem(USERS_TO_SIGN_OUT, JSON.stringify(usersToSignOut));
    }

  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY)!);
  }

  public isLoggin(): boolean {
    if (this.getToken() != undefined) {
      return true;
    }
    return false;
  }

  /**
   * Metodo Para Obtener el Nombre Completo del Usuario
  */

  public getFullNameByUser(): string{
    return (this.getUser()['firstName'] as string).trim() + ' ' + (this.getUser()['secondName'] as string).trim();
  }

  /**
   * Metodo para obtener
   */
  public getAppByRol():Application[]{
    let appCurrent:string = (this.getUser() as User).listRols[0].application;

    return  appCurrent == this.ALL_APP
            // ? JSON.parse(localStorage.getItem(this.KEY_APP)).filter((item)=>item.capApplicationID != this.MAIN_APP)
            ? JSON.parse(localStorage.getItem(this.KEY_APP)!)
            : (JSON.parse(localStorage.getItem(this.KEY_APP)!) as Application[]).filter((Item)=>Item.capApplicationID == appCurrent);
  }

  /**
   * Hay que Evaluar que se realize la Consulta al Servicio.
   * Por que Su los supervisores se inactivan queda en Session desactualizaco y es un Fix.
   */
  public isMancomuned(moduleKey:number): boolean {
    return ((this.getUser()["optiomManc"] as number[]).filter((item)=>item == moduleKey).length > 0);
  }

  public isAllMancomuned(): boolean {
     return ((this.getUser()["optiomManc"] as number[]).length > 0);
    //return false;
  }

  /**
   * Metodos de Manejo de Session
   * */

  //Pasa a la vista de cierre de session
  public closeSessionView(){
    this.IstatusLogin.statusLogin = false;
    this.IstatusLogin.changePassword = false;
    this.IstatusLoginSubject.next(this.IstatusLogin);
  }

  //Pasa a la vista de session iniciada
  public openSessionView(){
    this.IstatusLogin.statusLogin = true;
    this.IstatusLogin.changePassword = false;
    this.IstatusLoginSubject.next(this.IstatusLogin);
  }

  //Pasa a la vista de cambio de Contraseña
  public changePasswordSessionView(){
    this.IstatusLogin.statusLogin = true;
    this.IstatusLogin.changePassword = true;
    this.IstatusLoginSubject.next(this.IstatusLogin);
  }

}
