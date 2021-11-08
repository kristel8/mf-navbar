import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ConfigUserService } from './shared-elements/services/config-user.service';
import { SidebarService } from './shared-elements/services/sidebar.service';
import { TokenStorageService } from './shared-elements/services/token-storage.service';
import { ConfigSegUser } from './shared-elements/utils/entities/config-seg-user';
import { StatusLogin } from './shared-elements/utils/entities/status-login';
import { take } from 'rxjs/operators';
import { timer } from 'rxjs';
import { StorageServiceService } from './shared-elements/services/storage-service.service';

@Component({
  selector: 'mf-hcenter3-navbar',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-hcenter3-navbar';
  isExpanded = false;
  isShowing = false;
  modeSidebar = "side";
  isToggled = false;
  subscription=null;
  configSegUser:ConfigSegUser;
  timer:number=0;

  eventNavbar: Event = new Event('navBarToggle');

  constructor(
    public configUserService: ConfigUserService,
    public translate: TranslateService,
    private tokenStorageService: TokenStorageService,
    private sidebarService: SidebarService,
    private dialogRef: MatDialog,
    private route: Router,
    //private storageService: StorageServiceService
  ){}

  ngOnInit() {
    this.tokenStorageService.IstatusLoginObservable$.subscribe(
      (session: StatusLogin) => {
        console.log("hola");
        this.IstatusLogin = session;
        this.configUserService.getLastConfig().subscribe(
          (succes) => {
            //flagBlockUserInactivityPeriod
            console.log(succes);

            if(succes.flagMinimumForceChangePassword=="1"){

              //let datecaducidad= Number(this.tokenStorageService.getUser().periodoCaducidadContrasena);
              let strcaducidad=this.tokenStorageService.getUser().periodoCaducidadContrasena;
              let caducidaddate = new Date(strcaducidad.substr(0,4)+"-"+strcaducidad.substr(4,2)+"-"+strcaducidad.substr(6,2)+"T00:00:00");

              let today = new Date();

              caducidaddate.setDate(caducidaddate.getDate() + succes.minimumForceChangePassword);

              //futureDate.setDate(futureDate.getDate() + days);

              var day = ('0' + today.getDate()).slice(-2);
              var month = ('0' + (today.getMonth() + 1)).slice(-2);
              var year = today.getFullYear();
              let datecadatoday=Number(year+month+day)

              var day = ('0' + caducidaddate.getDate()).slice(-2);
              var month = ('0' + (caducidaddate.getMonth() + 1)).slice(-2);
              var year = caducidaddate.getFullYear();
              let datecaducidad=Number(year+month+day)

              if(datecadatoday>=datecaducidad){
                console.log("cambio");
                this.IstatusLogin.changePassword = true;
                this.tokenStorageService.changePasswordSessionView();
              }
            }



            this.configSegUser = succes as ConfigSegUser;
            if(this.configSegUser.flagBlockUserInactivityPeriod=="1"){
              this.timer=this.configSegUser.blockUserInactivityPeriod;
              this.resetTimer();
            }

          },
          (error) => {
            console.log(error);

          }
        );
      },
      (error) => {
        console.log("no se puese asociar");
      },
      () => {
        console.log("finalizado");
      }
    );

    // const session = await this.tokenStorageService.IstatusLoginObservable$.toPromise();
    // console.log(session);
    // this.IstatusLogin = session;

    console.log(
      "Componente Padre : login: " +
        this.IstatusLogin.statusLogin +
        " / changePassword: " +
        this.IstatusLogin.changePassword
    );
    // Valida si el usuario esta logeado, en caso si se recarga la pagina y el token existe.
    if (this.tokenStorageService.isLoggin()) {
      this.IstatusLogin.statusLogin = true;
      this.configUserService.getLastConfig().subscribe(
        (succes) => {
          this.configSegUser = succes as ConfigSegUser;
          this.timer=this.configSegUser.blockUserInactivityPeriod;
          this.resetTimer();
        },
        (error) => {
          console.log(error);

        }
      );
    }

    if (sessionStorage.getItem("changePassword") === "true") {
      this.IstatusLogin.changePassword = true;
    }
    // this.getMenuConfig();
  }

  resetTimer() {

    if(this.IstatusLogin.statusLogin){
      this.clearTimer();
      this.initTimer(this.timer);
    }
 }

 initTimer(endTime: number) {
  if(this.configSegUser && this.configSegUser.flagBlockUserInactivityPeriod=="1"){
    if(endTime!=0){
      const interval = 1000;
      const duration = endTime * 60;

      this.subscription = timer(0, interval)
        .pipe(take(duration))
        .subscribe(value => {
          //console.log(value);
        if(value==endTime){
          this.logout();
        }},
          err => { });
    }
  }

}

  public IstatusLogin: StatusLogin = {
    statusLogin: false,
    changePassword: false,
  };
    // Navbar
    toggleSideBar() {
      this.isShowing = false;
      this.isExpanded = !this.isExpanded;
      this.isToggled = !this.isToggled;
      localStorage.removeItem('toggleSidebar');
      localStorage.setItem('toggleSidebar', JSON.stringify({ isExpanded: this.isExpanded, isToggled: this.isToggled}));
      window.dispatchEvent(this.eventNavbar);//Disparar el evento;
      //this.storageService.store( 'toggleSidebar', { isExpanded: this.isExpanded, isToggled: this.isToggled});
      //this.sidebarService.isOpenSidenav(false);
    }

   clearTimer () {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
   }

    logout() {
      this.clearTimer();
      this.IstatusLogin = { statusLogin: false, changePassword: false};
      this.tokenStorageService.signOut();
      this.dialogRef.closeAll();
      this.route.navigate(['/login']);
    }

}
