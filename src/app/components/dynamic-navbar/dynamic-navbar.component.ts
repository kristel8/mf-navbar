import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { interval } from 'rxjs';
import { RequestApprovalService } from '../../shared-elements/services/request-approval.service';
import { TokenStorageService } from '../../shared-elements/services/token-storage.service';
import { Menu } from '../../shared-elements/utils/entities/menu';
import { RequestApprovalList } from '../../shared-elements/utils/entities/requestApprovalList copy';
import { Role } from '../../shared-elements/utils/entities/role';
import { StatusLogin } from '../../shared-elements/utils/entities/status-login';
import { SubMenu } from '../../shared-elements/utils/entities/sub-menu';
import { UtilsTemp } from '../../shared-elements/utils/entities/utils-temp';
import { Utils } from '../../shared-elements/utils/utils';

@Component({
  selector: 'app-dynamic-navbar',
  templateUrl: './dynamic-navbar.component.html',
  styleUrls: ['./dynamic-navbar.component.scss'],
})
export class DynamicNavbarComponent implements OnInit {
  @Output() statusLogin = new EventEmitter();
  IstatusLogin: StatusLogin = { statusLogin: false, changePassword: false };
  expTokenCurrentTime: string = '';
  flagMonitoring: boolean = false;

  private roles!: string[];
  idUser!: string;
  idAppRole!: string;
  showAdminBoard = false;
  showModeratorBoard = false;
  username!: string;

  notificactionCount = 0;
  notificReqList: RequestApprovalList[] = [];
  isMancomunated: boolean = false;

  approvalRequests!: RequestApprovalList;

  menusConfig!: Menu[];
  subMenuDisparo!: SubMenu[];

  containt: genericos[] = [];

  fullName!: string;

  //NewMenu
  @Output() toggle = new EventEmitter();

  constructor(
    public translate: TranslateService,
    private router: Router,
    private tokenStorageService: TokenStorageService,
    private requestApproval: RequestApprovalService,
    private reqAppService: RequestApprovalService,
    public utils: Utils
  ) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    if (this.tokenStorageService.isLoggin()) {
      // NOTA: Con esto se muestra el 'username' en la esquina izquierda
      const user = this.tokenStorageService.getUser();
      console.log('ENTRO:',user);
      this.username = user.username;
      this.menusConfig = user.listRols[0].listModules;
      this.fullName = user.firstName.trim() + ' ' + user.secondName.trim();
      //Inputs para Reporte
      this.idUser = user.id;
      this.idAppRole = user.listRols[0].application;

      this.containt = this.proccessMenu();

      this.isMancomunated = this.tokenStorageService.isAllMancomuned();
      this.loadNotification();
      /**
       * Se Usara para cargar las notificaciones.
       */
      const notificationReload = interval(5000).subscribe((x: any) => {
        this.loadNotification();
      });

      /**
       * Se Usara para validacion de expiracion del token
       */
      if (UtilsTemp.dummyUser.trim() === this.username.toUpperCase().trim()) {
        this.flagMonitoring = true;
        const observable = interval(1000);
        const subscription = observable.subscribe((x: any) => {
          this.getTimeCurrentToken();
        });
      }
    }
  }

  //NewMenu
  toggleSideBar() {
    this.toggle.emit();
  }

  //NewMenu

  logout() {
    this.tokenStorageService.signOut();
    this.statusLogin.emit(this.IstatusLogin);
  }

  isShow(typeMenu: string, menuItem: Menu): boolean {
    let bRet = false;
    if (menuItem.type.toLowerCase() === typeMenu.toLowerCase()) {
      bRet = true;
    }
    // No se mostrara hasta defirnir informacion a motrar en mi perfil
    if (menuItem.description == 'Mi Perfil') {
      bRet = false;
    }
    return bRet;
  }

  hasSubMenu(subMenu: Menu[]): boolean {
    let bRet = false;
    if (subMenu !== undefined && subMenu != null && subMenu.length > 0) {
      bRet = true;
    }
    return bRet;
  }

  dispararSubMenu(menu: Menu) {
    this.subMenuDisparo = menu.listArbolModulo;
  }

  getLabelByLanguaje(cadena: string): string {
    const languaje = this.translate.store.currentLang;
    let sRet = cadena + '';
    switch (languaje) {
      case 'es':
        sRet = sRet.split(';')[0].substring(sRet.indexOf('=') + 1);
        break;
      case 'en':
        sRet = sRet.split(';')[1].substring(sRet.indexOf('=') + 1);
        break;
    }
    return ' ' + sRet;
  }

  proccessMenu() {
    // console.log('this.menusConfig: ', this.menusConfig);
    let row_main: number = this.menusConfig.length / 3;
    let column_main: number = 3;
    let ERASE_URL: string = '/notfound';

    let main_total: number = this.menusConfig.length;
    let sentinel: number = 0;

    let main: genericos[] = [];
    let containt: genericos[] = [];
    let title: genericos[] = [];
    let row: genericos[] = [];

    for (let index = 0; index < row_main; index++) {
      for (let index2 = 0; index2 < column_main; index2++) {
        if (this.menusConfig.length > sentinel) {
          this.menusConfig[sentinel].listArbolModulo.forEach((item) => {
            item.routeAngular =
              item.routeAngular == null
                ? ERASE_URL
                : item.routeAngular.replace(':codUsuario', this.idUser);
            item.routeAngular =
              item.routeAngular == null
                ? ERASE_URL
                : item.routeAngular.replace(
                    ':aplicaciones',
                    this.idAppRole == '0'
                      ? 'CJCOCR&MAIN'
                      : this.idAppRole + '&MAIN'
                  );

            row.push({
              name: item.processName,
              url: item.routeAngular == null ? ERASE_URL : item.routeAngular,
              lista: undefined,
            });
          });

          title.push({
            name: this.menusConfig[sentinel].description,
            url: undefined,
            lista: row,
          });
        }

        row = [];
        sentinel = sentinel + 1;
      }

      containt.push({
        name: 'containt ' + index,
        url: undefined,
        lista: title,
      });

      row = [];
      title = [];

      main.push({ name: 'main', url: undefined, lista: containt });
    }

    return containt;
  }

  getTimeCurrentToken() {
    // console.log("token");

    if (this.tokenStorageService.getToken() != null) {
      let jsonToken: any = JSON.parse(
        atob(this.tokenStorageService.getToken().split('.')[1])
      );

      let tokenDate: Date = new Date(Number.parseInt(jsonToken.exp) * 1000);
      let nowDate: Date = new Date();

      // console.log("Date Token: "+
      //   tokenDate.getUTCDay()+"/"+
      //   tokenDate.getMonth()+"/"+
      //   tokenDate.getFullYear()+
      //   " Time: "+
      //   tokenDate.getHours()+":"+
      //   tokenDate.getMinutes()+":"+
      //   tokenDate.getSeconds()+
      //   " / Now Date: "+
      //   nowDate.getUTCDay()+"/"+
      //   nowDate.getMonth()+"/"+
      //   nowDate.getFullYear()+
      //   " Time: "+
      //   nowDate.getHours()+":"+
      //   nowDate.getMinutes()+":"+
      //   nowDate.getSeconds());

      let diff: number = tokenDate.getTime() - nowDate.getTime();
      let secunds: Date = new Date(diff);

      // diff / (1000*60*60*24) // recomendado para el dia.
      // console.log("Tiempo: "+diff+"  "+
      // Math.trunc(diff / (1000*60*60))+":"+
      // Math.trunc(diff / (1000*60))+":"+
      // secunds.getSeconds()
      // );

      this.expTokenCurrentTime =
        Math.trunc(diff / (1000 * 60 * 60)) +
        ':' +
        Math.trunc(diff / (1000 * 60)) +
        ':' +
        secunds.getSeconds();
    }
  }

  loadNotification() {
    this.requestApproval
      .getRequestApprovalNotification(
        this.tokenStorageService.getUser()['username']
      )
      .subscribe(
        (success: RequestApprovalList[]) => {
          this.notificactionCount = success.length;
          this.notificReqList = success;
        },
        (error: any) => console.log('Error en Notificaciones')
      );
  }

  loadPage(raid: number) {
    let currentRol: Role = (
      Array.from(this.tokenStorageService.getUser()["listRols"]) as Role[]
    )[0];

    let apps =
      currentRol.application == "0"
        ? JSON.parse(localStorage.getItem("apps")!)
            .map((item: { capApplicationID: any; }) => item.capApplicationID)
            .reduce((acc: string, act: string) => acc + ";" + act)
        : currentRol.application;

    this.reqAppService
      .getOneRequestApproval(this.tokenStorageService.getUser()["id"], raid, {
        apps: apps,
      })
      .subscribe(
        (success: RequestApprovalList) => {
          this.approvalRequests = success;
        },
        (error: any) => console.log("Error Solicitud de Aprobacion"),
        () => {
          const navigationExtras: NavigationExtras = {
            state: this.approvalRequests,
          };

          console.log(navigationExtras);

          this.router
            .navigateByUrl("/", { skipLocationChange: true })
            .then(() =>
              this.router.navigate(
                ["/approvalRequestDetails"],
                navigationExtras
              )
            );
        }
      );
  }
}

export interface genericos {
  name: string;
  url: string;
  lista: genericos[];
}
