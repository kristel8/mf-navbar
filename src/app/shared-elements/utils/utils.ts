import { Injectable } from "@angular/core";
import { formatDate } from "@angular/common";

import { HttpErrorResponse } from "@angular/common/http";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { StatusTerminal } from "./entities/enum.status.terminal";
import { Application } from "./entities/application";


// Produccion
const END_POINT = "api";

// Dev
// const END_POINT = 'http://localhost:8080/api';

@Injectable({
  providedIn: "root",
})
export class Utils {
  constructor(
    //private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar
  ) {}
  public ERASE_VALUE = "NONE";

  static AUDIT_MANCOMUNED_TYPE = 1;

  // name for the modules related to the approval request
  public MODULE_NAME_MERCHANT_CHAIN = "Cadena de Comercio";
  public MODULE_NAME_CHAIN = "Comercio";
  public MODULE_NAME_NETWORK_PROFILE = "Perfil de Red";
  public MODULE_NAME_TERMINAL = "Terminal";

  // types of request
  public TYPE_REQUEST_CREATE_ES = "Nuevo"; // Se guardara en ingles y se presentara en el idioma.
  public TYPE_REQUEST_EDIT_ES = "Edicion"; // Se guardara en ingles y se presentara en el idioma.
  public TYPE_REQUEST_DELETE_ES = "Eliminacion"; // Se guardara en ingles y se presentara en el idioma.

  public TYPE_REQUEST_CREATE = "create"; // Se guardara en ingles y se presentara en el idioma.
  public TYPE_REQUEST_EDIT = "edit"; // Se guardara en ingles y se presentara en el idioma.
  public TYPE_REQUEST_DELETE = "delete"; // Se guardara en ingles y se presentara en el idioma.

  // request status types
  public TYPE_STATUS_REQUEST_PENDING = "0";
  public TYPE_STATUS_REQUEST_APPROVAL = "1";
  public TYPE_STATUS_REQUEST_REJECTED = "2";

  // request status types label
  public TYPE_STATUS_REQUEST_PENDING_LABEL = "Pendiente";
  public TYPE_STATUS_REQUEST_APPROVAL_LABEL = "Aprobado";
  public TYPE_STATUS_REQUEST_REJECTED_LABEL = "Rechazado";

  // These variables reflect the display status
  // of the request, their purpose is for the display
  // of pending notifications.
  public TYPE_STATUS_VIEWED_PENDING = "0";
  public TYPE_STATUS_VIEWED_VISUALIZED = "1";

  // Columns MercharChain
  public NAME_LABEL_DMCCHAINNAME = "Nombre 1";
  public NAME_LABEL_DMCDESCRIPTION = "Nombre 2";
  public NAME_LABEL_DMCRUC = "Nombre 3";
  public NAME_LABEL_DMCMODIFYUSER = "Nombre 4";
  public NAME_LABEL_FMCMODIFYDATE = "Nombre 5";
  public NAME_LABEL_HMCMODIFYTIME = "Nombre 6";

  public NAME_COLUMN_DMCCHAINNAME = "dmcChainName";
  public NAME_COLUMN_DMCDESCRIPTION = "dmcdescription";
  public NAME_COLUMN_DMCRUC = "dmcruc";
  public NAME_COLUMN_DMCMODIFYUSER = "cmcmodifyUser";
  public NAME_COLUMN_FMCMODIFYDATE = "fmcmodifyDate";
  public NAME_COLUMN_HMCMODIFYTIME = "hmcmodifyTime";

  public parseLabelMC = [
    {
      label: this.NAME_LABEL_DMCCHAINNAME,
      column: this.NAME_COLUMN_DMCCHAINNAME,
      value: this.ERASE_VALUE,
    },
    {
      label: this.NAME_LABEL_DMCDESCRIPTION,
      column: this.NAME_COLUMN_DMCDESCRIPTION,
      value: this.ERASE_VALUE,
    },
    {
      label: this.NAME_LABEL_DMCRUC,
      column: this.NAME_COLUMN_DMCRUC,
      value: this.ERASE_VALUE,
    },
    {
      label: this.NAME_LABEL_DMCMODIFYUSER,
      column: this.NAME_COLUMN_DMCMODIFYUSER,
      value: this.ERASE_VALUE,
    },
    {
      label: this.NAME_LABEL_FMCMODIFYDATE,
      column: this.NAME_COLUMN_FMCMODIFYDATE,
      value: this.ERASE_VALUE,
    },
    {
      label: this.NAME_LABEL_HMCMODIFYTIME,
      column: this.NAME_COLUMN_HMCMODIFYTIME,
      value: this.ERASE_VALUE,
    },
  ];

  public TYPE_MENU_SUPERIOR_IZQUIERDO = "LOGO";
  public TYPE_MENU_SUPERIOR_CENTRO = "OPERATIVO";
  public TYPE_MENU_SUB_OPCION_SUPERIOR_DERECHA = "MANTENIMIENTO";

  public SELECTION_ARRAY = "_selection";

  static ACTIVADO = 0;
  static DESACTIVADO = 1;

  static CONF_SEG_ACTIVADO = "1";
  static CONF_SEG_DESACTIVADO = "0";

  public RED_COLOR = "#E4002B";
  public BLUE_COLOR = "blue";
  public BLACK_COLOR = "#E4002B";
  public GREY_COLOR = "#747474";

  public ARRAY_OF_TABLE = [50, 100, 200];
  public ARRAY_OF_TABLE_SMALL = [10, 50, 100];

  public ENABLE_CHECKBOX = true;
  public DISABLE_CHECKBOX = false;

  public DISABLE_CLEAR_FILTER = false;
  public ENABLE_CLEAR_FILTER = true;

  public FECHA_ACTUAL = this.fecha("");

  public SELECT_CMCCHAINIDEDIT = "cmcchainID";
  public SELECT_GROUPCARDID = "groupCardId";
  public SELECT_MERCHANT_CUPO_TRANSACTION_ID = "transactionId";
  public SELECT_LIMIT_ACTIVITY_TRANSACTION_ID = "transactionId";
  public SELECT_MERCHANT_CUPO_ID = "merchantId";

  public SELECT_CMCCHAINID = "cMCChainID";
  public SELECT_CMRMERCHANTID = "cmrMerchantId";
  public SELECT_CMPPROFILEID = "cmpprofileId";
  public SELECT_CTRMERCHANTID = "cTrMerchantId";
  public SELECT_CTRTERMINALNUM = "cTrTerminalNum";
  public SELECT_DTRTERMINALSN = "dTrTerminalSN";
  public SELECT_CTERMINALID = "ctrMerchantId";
  public SELECT_COMPOSEID = "composeID";
  public SELECT_ID = "id";
  public SELECT_ID_TRANSACTION_TYPE = "ctttransactionId";
  public SELECT_ID_LDAP = "confLdapKey";
  // put here all the COMPONENTE DIALOG NEED WHIT THE CONSTANT KEY
  public EDITAR_CADENA_COMERCIO = "EditarCadenaComercioComponent";
  public EDITAR_COMERCIO = "EditarComercioComponent";
  public EDITAR_PERFIL_COMERCIO = "EditarPerfilcomercioComponent";
  public EDITAR_CUPO_COMERCIO = "EditarCupoComercioComponent";
  public EDITAR_LIMITE_ACTIVIDAD = "EditarLimiteComercioComponent";
  public EDITAR_TERMINAL = "EditarTerminalComponent";
  public EDITAR_USER = "EditarUserDialog";
  public NUEVO_USER = "NuevoUserDialog";
  public EDITAR_USER_POS = "EditarUserPosDialog";
  public NUEVO_USER_POS = "NuevoUserPosDialog";
  public EDITAR_VERSION = "EditarVersionDialog";
  public FILE_VERSION = "FileVersionDialog";
  public NUEVO_VERSION = "NuevoVersionDialog";
  public EDITAR_ROLPOS = "EditarRolPosDialog";
  public NUEVO_ROLPOS = "NuevoRolPosDialog";
  public EDITAR_ROL = "EditarRolDialog";
  public NUEVO_ROL = "NuevoRolDialog";
  public APROBACION_SOLICITUD = "approvalRequestDialog";
  public EDITAR_LDAP = "EditarConfiguracionLdapComponent";
  public EDITAR_SUPERVISOR_MANCOMUNADO = "EditarSupervisorComponent";
  public REPORT_COMISSION_COMPONENT = "ReportComissionsComponent";
  public SELECT_IDCOMMISION = "id";

  public EDITAR_COMMISSION = "EditarCommissionDialog";

  public SOLICITUD_ELIMINACION_REALIZADA = "already_attended";

  public SOLICITUD_YA_ATENTIDA = "La solicitud ya fue atendida por otro supervisor";

  // Mantenimiento de transacciones
  public EDITAR_TRANSACCION = "EditarTransaccionDialog";

  // Mantenimiento de applicacitones
  public EDITAR_APLICATION = "EditarAplicationDialog";

    // Mantenimiento de applicacitones
    public EDITAR_GROUP_CARD= "EditarGroupCardDialog";

    public EDITAR_BINES_OPERADOR= "EditarBinesOperadorialog";

    //Mantenimiento de servicios publicos
    public EDITAR_CATEGORIA= "EditarCategoriaDialog";

    public EDITAR_SUB_CATEGORIA= "EditarSubCategoriaDialog";

    public EDITAR_AFILIADO= "EditarAfiliadonDialog";

    public EDITAR_AFILIADO_UBICACION= "EditarAfiliadosUbicacionDialog";

    public EDITAR_OPCION_AFILIADO= "EditarOpcionAfiliadonDialog";
    public EDITAR_AFILIADO_CADENA= "EditarAfiliadoCadenaDialog";

    public EDITAR_POPCOMERCIO= "PopupComercioDialog";
  //

  //PARAMETROS GENERALES
  public EDITAR_CAMPO_LISTA = "CampoListaEditComponent";
  public NUEVO_CAMPO_LISTA = "CampoListaNewComponent";

  public EDITAR_TIPO_CAMBIO = "EditarTipoCambioComponent";
  public NUEVO_TIPO_CAMBIO = "TipoCambioNewComponent";

  // Nota: Pasa a ser deprecado
  // put here all the COMPONENTE DIALOG NEED WHIT THE CONSTANT KEY
  // public MAP_DIALOG_COMPONENT = new Map<string, any>()
  //   .set(Utils.EDITAR_CADENA_COMERCIO, EditarCadenaComercioComponent)
  //   .set(this.EDITAR_COMERCIO, EditarComercioComponent)
  //   .set(this.EDITAR_PERFIL_COMERCIO, EditarPerfilcomercioComponent)
  //   .set(this.EDITAR_TERMINAL, EditarTerminalComponent)
  //   .set(this.EDITAR_USER, BoardUserEditComponent)
  //   .set(this.NUEVO_USER, BoardUserNuevoComponent)
  //   .set(this.EDITAR_USER_POS, EditarUsuarioposComponent)
  //   .set(this.NUEVO_USER_POS, CrearUsuarioposComponent)
  //   .set(this.EDITAR_ROLPOS, EditarRolposComponent)
  //   .set(this.NUEVO_ROLPOS, CrearRolposComponent)
  //   .set(this.EDITAR_ROL, EditarRolComponent)
  //   .set(this.NUEVO_ROL, NuevoRolComponent)
  //   .set(this.APROBACION_SOLICITUD, OperApprovalRequestDetailComponent)
  //   .set(this.EDITAR_LDAP, EditarConfiguracionLdapComponent)
  //   .set("undefined8", undefined)
  //   .set("undefined9", undefined);

  static getEnd_Point(matchPath: string): string {
    return `${END_POINT}/` + matchPath;
  }

  static wait(ms: number) {
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }

  public trackByIndex(index: number, obj: any): any {
    return index;
  }

  public isSticky(column: string, compared: string): boolean {
    if (column.toLowerCase() === compared) {
      return true;
    }
    return false;
  }

  // Nota: Metodo deprecado
  // public getDialogComponente(key: string): any {
  //   return this.MAP_DIALOG_COMPONENT.get(key);
  // }

  public dataIsValid(data: any): boolean {
    let bRet = false;
    if (data != undefined && data != null) bRet = true;
    return bRet;
  }
  public getDataOutPut(data: Set<any>) {
    return Array.from(data);
  }

  public isNumber(value: any): boolean {
    const isNumber = Number(value);
    if (isNaN(isNumber)) {
      return false;
    }
    return true;
  }

  public fotmatDateTrim(value: string): string {
    let resul: string;

    resul = value.substring(0, 10);

    return resul;
  }

  public getStatus(status: string): string {
    //console.log('Estdado: ', status);
    if (status.trim() === StatusTerminal.COMPLETED_INSTALLATION)
      return "INSTALACIÓN COMPLETADA";
    else if (status.trim() === StatusTerminal.INSTALLING) return "INSTALANDO";
    else if (status.trim() === StatusTerminal.COMPLETED_DOWNLOAD)
      return "DESCARGA COMPLETA";
    else if (status.trim() === StatusTerminal.DOWNLOADING) return "DESCARGANDO";
    else if (status.trim() === StatusTerminal.PENDING) return "PENDIENTE";
    else if (status.trim() === StatusTerminal.FAILING) return "FALLIDO";
    else return "NO DEFINIDO";
  }

  public getStatuscolor(status: string): string {
    //console.log('Estdado: ', status);
    /*
    if (status.trim() === StatusTerminal.COMPLETED_INSTALLATION)
      return '<div class"custom-cell-INSTALLATION" style="border-radius: 10px !important; border: solid 1px;border-color: #0E7D1C; color: #0E7D1C !important; padding: 0px 5px;">hola</div>';
    else if (status.trim() === StatusTerminal.INSTALLING)
      return '<div class"custom-cell-INSTALLATION">hola</div>';
    else if (status.trim() === StatusTerminal.COMPLETED_DOWNLOAD)
    return '<div class"custom-cell-INSTALLATION">hola</div>';
    else if (status.trim() === StatusTerminal.DOWNLOADING)
      return '<div class"custom-cell-INSTALLATION">hola</div>';
    else if (status.trim() === StatusTerminal.PENDING)
      return '<div class"custom-cell-INSTALLATION">hola</div>';
    else if (status.trim() === StatusTerminal.FAILING)
      return '<div class"custom-cell-INSTALLATION">hola</div>';
    else
      return '<div class"custom-cell-INSTALLATION">hola</div>';
      */
    return '<span><div class"demo" style="border-radius: 10px !important; border: solid 1px;border-color: #0E7D1C; color: #0E7D1C !important; padding: 0px 5px;">ho</div></span>';
  }

  public formatDate(value: string): string {
    // hh:mm:ss dd/MM/YYYY
    let sRet: string;

    if (value == null || value == "null") {
      return "∉";
    }

    const hour = value.split(" ")[0];
    const dateParts = value.split(" ")[1].split("/");
    const date = dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2];
    const dateParse: number = Date.parse(hour + " " + date);
    if (isNaN(dateParse) || dateParse === undefined) {
      sRet = "∉";
    } else {
      try {
        const dateFormat: Date = new Date(dateParse);
        sRet = formatDate(dateFormat, "dd/MM/yyyy hh:mm", "en-US").toString();
      } catch (exception) {
        sRet = "∉";
      }
    }
    return sRet;
  }

  public formatDate2(value: string): string {
    //yyyyMMdd -> dd/MM/YYYY
    let sRet: string;

    if (value == null || value == "null") {
      return " ";
    }

    try {
      sRet =
        value.substring(6, 8) +
        "/" +
        value.substring(4, 6) +
        "/" +
        value.substring(0, 4);
    } catch (exception) {
      sRet = "∉";
    }
    return sRet;
  }

  public formatTime(value: string): string {
    // hhmmss -> HH:mm:ss
    if (value == null || value == "null") {
      return " ";
    }
    let sRet: string;
    try {
      const dateParse =
        value.substring(0, 2) +
        ":" +
        value.substring(2, 4) +
        ":" +
        value.substring(4, 6);
      sRet = dateParse.toString();
    } catch (exception) {
      sRet = "∉";
    }
    return sRet;
  }

  public formatStatusTerminal(value: string) {
    // VALORES 0 -> HABILITADO  1 -> DESHABILITADO
    let sRet: string;
    if (value === "0") {
      sRet = "HABILITADO";
    } else if (value === "1") {
      sRet = "INHABILITADO";
    } else {
      sRet = value;
    }
    return sRet;
  }

  public formatStatus(value: string) {
    // VALORES 0 -> ACTIVO  1 -> BLOQUEADO
    let sRet: string;
    if (value === "0") {
      sRet = "HABILITADO";
    } else if (value === "1") {
      sRet = "DESHABILITADO";
    } else {
      sRet = value;
    }
    return sRet;
  }

  public formatStatus2(value: string) {
    // VALORES 0 -> ACTIVO  1 -> BLOQUEADO
    let sRet: string;

    if (value === "0") {
      sRet = "HABILITADO";
    } else if (value === "1") {
      sRet = "DESHABILITADO";
    } else {
      sRet = value;
    }
    return sRet;
  }

  public getStatusLimite(statusString: string): string{
    if(statusString == "Habilitado") {
      return "0";
    } else if(statusString == "Deshabilitado") {
      return "1";
    }
    return statusString;
  }

  public formatStatusComercio(value: string) {
    // VALORES 0 -> ACTIVO  1 -> BLOQUEADO
    let sRet: string;

    if (value === "0") {
      sRet = "HABILITADO";
    } else if (value === "1") {
      sRet = "HISTÓRICO";
    } else if (value === "2") {
      sRet = "DESHABILITADO";
    } else {
      sRet = value;
    }
    return sRet;
  }

  public formatStatusRequest(value: string): string {
    let resul!: string;
    switch (value) {
      case this.TYPE_STATUS_REQUEST_PENDING: {
        resul = this.TYPE_STATUS_REQUEST_PENDING_LABEL;
        break;
      }

      case this.TYPE_STATUS_REQUEST_APPROVAL: {
        resul = this.TYPE_STATUS_REQUEST_APPROVAL_LABEL;
        break;
      }

      case this.TYPE_STATUS_REQUEST_REJECTED: {
        resul = this.TYPE_STATUS_REQUEST_REJECTED_LABEL;
        break;
      }
    }

    return resul;
  }

  public formatSatusDownload(value: string) {
    // ESTADOS DE DOWNLOAD
    let sRet: string;
    switch (value) {
      case "0":
        sRet = "Actualizado";
        break;
      case "1":
        sRet = "Descargando";
        break;
      case "2":
        sRet = "Pendiente Descarga";
        break;
      case "3":
        sRet = "Desactualizado";
        break;
      default:
        sRet = "Desactualizado";
        break;
    }
    return sRet;
  }

  public fecha(fecha: string) {
    let fechaActual = new Date();
    let dia = ("0" + fechaActual.getDate().toString()).slice(-2);
    let mes = ("0" + (fechaActual.getMonth() + 1)).slice(-2);
    let anio = fechaActual.getFullYear().toString();
    let hora = ("0" + fechaActual.getHours().toString()).slice(-2);
    let minutos = ("0" + fechaActual.getMinutes().toString()).slice(-2);
    let segundos = ("0" + fechaActual.getSeconds().toString()).slice(-2);
    /*
        this.Fecha = dia + "-" + mes + "-" + anio;
        this.Hora = hora + ":" + minutos + ":" + segundos;*/
    return (fecha =
      dia +
      "/" +
      mes +
      "/" +
      anio +
      " " +
      hora +
      ":" +
      minutos +
      ":" +
      segundos);
  }

  public castApplicationAll(value: string) {
    console.log(value);

    if (value == "0") value = "TODOS";

    return this.getAppNameById(value);
    //return value;
  }

  public castUserStatus(value: string) {
    if (value == "0") value = "Desbloqueado";
    if (value == "1") value = "Bloqueado";
    return value;
  }

  public castTypeTransaction(value: string) {
    if (value == "0") value = "Financiera";
    if (value == "1") value = "Administrativa";
    return value;
  }

  verificarCodigoError(error: { status: number; }, router: { navigate: (arg0: string[]) => void; }) {
    if (error.status == 401) {
      alert("No se ha podido editar al usuario, debe volver a loguearse");
      router.navigate(["/login"]);
    }
  }

  public castEstadoLdap(value: string) {
    if (value == "0") value = "Desactivado";
    if (value == "1") value = "Activado";
    return value;
  }

  public castNull(value: string) {
    if (value == "null") value = "";
    if (value == undefined) value = "";
    if (value == null) value = "";
    if (value == "undefined") value = "";
    return value;
  }

  public castNullPorValor(value: string, reemplazo: string = "--") {
    if (value == "null") value = reemplazo;
    if (value == undefined) value = reemplazo;
    if (value == null) value = reemplazo;
    if (value == "undefined") value = reemplazo;
    return value;
  }

  public getAppNameById(value: string) {
    const appsStr = localStorage.getItem("apps")!;
    const apps = JSON.parse(appsStr) as Application[];
    const app = apps.find((el) => el.capApplicationID === value);
    if (app) {
      return app.dapApplicationName;
    }
    return value;
  }

  public inputValidator(event: { target: { value: string; }; }, type: string) {
    if (type === "alphanumeric") {
      const pattern = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s_.-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(
          /[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s_.-]/g,
          ""
        );
      }
    }

    if (type === "alphanumericV2") {
      const pattern = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s_.,;-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(
          /[^a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s_.,;-]/g,
          ""
        );
      }
    }

    if (type === "alphabetic") {
      const pattern = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(
          /[^A-Za-zñÑáéíóúÁÉÍÓÚ\s]/g,
          ""
        );
      }
    }
    if (type === "numeric") {
      const pattern = /^[0-9.]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, "");
      }
    }
    if (type === "alphanumeric-us") {
      const pattern = /^[a-zA-Z0-9]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9]/g, "");
      }
    }
    if (type === "domain") {
      const pattern = /^[a-zA-Z.:/-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^a-zA-Z.:/-]/g, "");
      }
    }
    if (type === "port") {
      const pattern = /^[0-9]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
      }
    }
    if (type === "email") {
      const pattern = /^[a-zA-Z0-9_.@-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(
          /[^a-zA-Z0-9_.@-]/g,
          ""
        );
      }
    }
    if (type === "ip") {
      const pattern = /^[0-9.-]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9.]/g, "");
      }
    }

    if (type === "fecha-hora") {
      const pattern = /^[0-9:/\s]*$/;
      if (!pattern.test(event.target.value)) {
        event.target.value = event.target.value.replace(/[^0-9:/\s]/g, "");
      }
    }
  }

  public parseStatus(value: string) {
    if ("0" === value) {
      return "Habilitado";
    }

    if ("1" === value) {
      return "Deshabilitado";
    }

    return value;
  }

  static validarLongitudContrasena(
    flagLongitudContrasena: string,
    contrasenaSinCodificar: string,
    longitudMaximaContrasena: number,
    longitudMinimaContrasena: number
  ): boolean {
    let bRet = false;
    if (flagLongitudContrasena == Utils.CONF_SEG_ACTIVADO) {
      //console.log(Utils.CONF_SEG_ACTIVADO);

      if (
        contrasenaSinCodificar.length > longitudMaximaContrasena ||
        contrasenaSinCodificar.length < longitudMinimaContrasena
      ) {
        bRet = true;
      } else {
        bRet = false;
      }
    }
    return bRet;
  }

  static validarNumeroCaracteresRepetidos(
    flagNumeroCaracteresRepetidos: string,
    contrasenaUnDecode: string,
    numeroCaracteresRepetidos: number
  ): boolean {
    let bRet = false;
    if (flagNumeroCaracteresRepetidos == Utils.CONF_SEG_ACTIVADO) {
      let chars: string[] = contrasenaUnDecode.split("");
      for (let i = 0; i < chars.length; i++) {
        let contadorCaracteres = this.contarCaracteres(
          contrasenaUnDecode,
          chars[i]
        );
        if (
          numeroCaracteresRepetidos > 0 &&
          contadorCaracteres > numeroCaracteresRepetidos
        ) {
          bRet = true;
          break;
        }
      }
    }
    return bRet;
  }

  static validarCaracteresNumericosMayusMinus(
    flagIngresoCaracteresMayusMinus: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagIngresoCaracteresMayusMinus == Utils.CONF_SEG_ACTIVADO) {
      let iCaracterNumerico: number =
        this.buscarCaracterNumerico(contrasenaUnDecode);
      let sCaracterMayuscula: string = this.buscarMayuscula(contrasenaUnDecode);
      let sCaracterMinuscula: string = this.buscarMinuscula(contrasenaUnDecode);
      // console.log(iCaracterNumerico);
      // console.log(sCaracterMayuscula);
      // console.log(sCaracterMinuscula);
      if (
        iCaracterNumerico == -1 ||
        sCaracterMayuscula == null ||
        sCaracterMinuscula == null
      ) {
        bRet = true;
      }
    }
    return bRet;
  }

  static validarCaractererNumerico(
    flagIngresoCaracteresMayusMinus: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagIngresoCaracteresMayusMinus == Utils.CONF_SEG_ACTIVADO) {
      let iCaracterNumerico: number =
        this.buscarCaracterNumerico(contrasenaUnDecode);
      if (iCaracterNumerico == -1) {
        bRet = true;
      }
    }
    return bRet;
  }

  static validarCaractererMinuscula(
    flagIngresoCaracteresMayusMinus: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagIngresoCaracteresMayusMinus == Utils.CONF_SEG_ACTIVADO) {
      let sCaracterMinuscula: string = this.buscarMinuscula(contrasenaUnDecode);
      if (sCaracterMinuscula == null) {
        bRet = true;
      }
    }
    return bRet;
  }

  static validarCaractererMayuscula(
    flagIngresoCaracteresMayusMinus: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagIngresoCaracteresMayusMinus == Utils.CONF_SEG_ACTIVADO) {
      let sCaracterMayuscula: string = this.buscarMayuscula(contrasenaUnDecode);
      if (sCaracterMayuscula == null) {
        bRet = true;
      }
    }
    return bRet;
  }

  static validarCaracteresEspeciales(
    flagCaracteresEspeciales: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagCaracteresEspeciales == Utils.CONF_SEG_ACTIVADO) {
      let sCaracterEspecial: string =
        this.buscarCaracterEspecial(contrasenaUnDecode);
      if (sCaracterEspecial == null) {
        bRet = true;
      }
    }
    return bRet;
  }

  static validarLimiteDigitosAdyacentes(
    flagLimiteDigitosAdyacentes: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagLimiteDigitosAdyacentes == Utils.CONF_SEG_ACTIVADO) {
      let chars: string[] = contrasenaUnDecode.split("");
      for (let i = 1; i < chars.length; i++) {
        let numberAnt: number = this.buscarCaracterNumerico(chars[i - 1]);
        let numberAct: number = this.buscarCaracterNumerico(chars[i]);
        if (numberAnt != -1 && numberAnt + 1 == numberAct) {
          bRet = true;
        }
      }
    }
    return bRet;
  }

  static validarLimiteDigitosAdyacentesv2(
    flagLimiteDigitosAdyacentes: string,
    contrasenaUnDecode: string
  ): boolean {
    let bRet = false;
    if (flagLimiteDigitosAdyacentes == Utils.CONF_SEG_ACTIVADO) {
      if(contrasenaUnDecode && contrasenaUnDecode.length > 0) {
        let chars: string[] = contrasenaUnDecode.toLowerCase().split("");
        let chars2: string[] = contrasenaUnDecode.split("");

        for (let i = 0; i < chars.length -1; i++) {
          const charPosition01 = chars[i].charCodeAt(0);
          const charPosition02 = chars[i+1].charCodeAt(0);

          // es adyacente
          if(charPosition01 + 1 === charPosition02){
            bRet = true;
            break;
          }
        }
      }
    }
    return bRet;
  }



  static validEmailFormater(email: string): boolean {
    let bRet = false;
    if (
      new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/).test(
        email
      ) == false
    ) {
      bRet = true;
    }
    return bRet;
  }

  private static contarCaracteres(cadena: string, caracter: string): number {
    let posicion,
      contador = 0;
    posicion = cadena.indexOf(caracter);
    while (posicion != -1) {
      contador++;
      posicion = cadena.indexOf(caracter, posicion + 1);
    }
    return contador;
  }

  private static buscarCaracterNumerico(cadena: string): number {
    let iRet = -1;
    let chars: string[] = cadena.split("");
    for (let i = 0; i < chars.length; i++) {
      iRet = Number(chars[i]);
      if (isNaN(iRet)) iRet = -1;
      else break;
    }
    return iRet;
  }

  private static buscarMayuscula(cadena: string): string {
    let sRet: any = null;
    let chars: string[] = cadena.split("");
    for (let i = 0; i < chars.length; i++) {
      let sCaracterMayuscula: any = chars[i].toUpperCase();
      if (!isNaN(sCaracterMayuscula * 1)) {
        //console.log('is numeric: ', sCaracterMayuscula)
        continue;
      }
      let sCaracterOriginal: string = chars[i];
      if (sCaracterMayuscula === sCaracterOriginal) {
        sRet = sCaracterOriginal;
        break;
      }
    }
    return sRet;
  }

  private static buscarMinuscula(cadena: string): string {
    let sRet: any = null;
    let chars = cadena.split("");
    for (let i = 0; i < chars.length; i++) {
      let sCaracterMinuscula: any = chars[i].toLowerCase();
      if (!isNaN(sCaracterMinuscula * 1)) {
        //console.log('is numeric: ', sCaracterMinuscula)
        continue;
      }
      let sCaracterOriginal: string = chars[i];
      if (sCaracterMinuscula === sCaracterOriginal) {
        sRet = sCaracterOriginal;
        break;
      }
    }
    return sRet;
  }

  private static buscarCaracterEspecial(cadena: string): string {
    let sRet: any = null;
    let chars = cadena.split("");
    for (let i = 0; i < chars.length; i++) {
      let sCaracterMayuscula: string = chars[i].toUpperCase();
      let sCaracterMinuscula: string = chars[i].toLowerCase();
      if (
        this.buscarCaracterNumerico(chars[i]) == -1 &&
        sCaracterMayuscula === sCaracterMinuscula
      ) {
        sRet = chars[i];
        break;
      }
    }
    return sRet;
  }

  public getLaguajeName(value: string): string {
    let sRet = null;
    sRet = value.split(";")[0].substring(3, value.split(";")[0].length);
    return sRet;
  }

  public getFullDateFormatter(value: string): string {
    let sRet = null;

    sRet =
      value == "null" || value == null
        ? ""
        : value.substring(8, 10) +
          "/" + //dia
          value.substring(5, 7) +
          "/" + //mes
          value.substring(0, 4) +
          " " + //anio
          value.substring(11, 19);

    return sRet;
  }

  public getMinDateFormatter(value: string): string {
    let sRet = null;

    sRet =
      value == "null"
        ? ""
        : value.substring(8, 10) +
          "/" + //dia
          value.substring(5, 7) +
          "/" + //mes
          value.substring(0, 4); //anio

    return sRet;
  }

  public getAllApps(): Application[] {
    const appsStr = localStorage.getItem("apps")!;
    const apps = JSON.parse(appsStr) as Application[];
    return apps;
  }

  public toastDanger(
    message: string,
    label: string = "Error",
    duration: number = 7000
  ) {
    let config = new MatSnackBarConfig();
    config.horizontalPosition = "right";
    config.verticalPosition = "top";
    config.panelClass = "hp-toast-danger";
    config.duration = duration;
    this._snackBar.open(message, label, config);
  }

  public toastSuccess(
    message: string,
    label: string = "Exito",
    duration: number = 7000
  ) {
    let config = new MatSnackBarConfig();
    config.horizontalPosition = "right";
    config.verticalPosition = "top";
    config.panelClass = "hp-toast-success";
    config.duration = duration;
    this._snackBar.open(message, label, config);
  }

  public toastWarning(
    message: string,
    label: string = "Alerta",
    duration: number = 7000
  ) {
    let config = new MatSnackBarConfig();
    config.horizontalPosition = "right";
    config.verticalPosition = "top";
    config.panelClass = "hp-toast-warning";
    config.duration = duration;
    this._snackBar.open(message, label, config);
  }

  public alertDanger(error: HttpErrorResponse) {
    console.error(error);
    if (error.error["message"]) {
      this.toastDanger(error.error.message);
    } else {
      if (error.statusText === "Unknown Error") {
        this.toastDanger("Error desconocido");
      } else {
        this.toastDanger(error.statusText);
      }
    }
  }

  // public alertDangerMancomunado(
  //   error: HttpErrorResponse,
  //   reqAppService: RequestApprovalService,
  //   currentReqApproval: RequestApproval
  // ) {
  //   console.error(error);
  //   if (error.error["message"]) {
  //     if(error.error["message"] === this.SOLICITUD_ELIMINACION_REALIZADA) {
  //       currentReqApproval.approval = UtilsConstant.TYPE_REQUEST_APPROVAL_REJECTED;
  //       this.toastWarning(this.SOLICITUD_YA_ATENTIDA);
  //       reqAppService.approval(currentReqApproval).subscribe(
  //         (success2: any) => {
  //           console.log("Solicitud Actualizada");
  //         },
  //         (error2: any) => console.log("Error al Actualizar Solicitud")
  //       );
  //     } else {
  //       currentReqApproval.approval =
  //       UtilsConstant.TYPE_REQUEST_APPROVAL_REJECTED;
  //       this.toastDanger(error.error.message);
  //       reqAppService.approval(currentReqApproval).subscribe(
  //         (success2: any) => {
  //           console.log("Solicitud Actualizada");
  //         },
  //         (error2: any) => console.log("Error al Actualizar Solicitud")
  //       );
  //     }
  //   } else {
  //     if (error.statusText === "Unknown Error") {
  //       this.toastDanger("Error desconocido");
  //     } else {
  //       this.toastDanger(error.statusText);
  //     }
  //   }
  // }

  // validAccessLevel(module: string, submodule: string): boolean {
  //   const role: Role[] = this.tokenStorage.getUser()["listRols"];
  //   const identifierModule = module;
  //   const procesoIndicatorArbolModule = submodule;
  //   const valModifid = "2";
  //   const valFullAccess = "3";

  //   if (
  //     role[0].listModules
  //       .filter((item: { identifier: string; }) => item.identifier.trim() == identifierModule)[0]
  //       .listArbolModulo.filter(
  //         (item: { procesoIndicator: string; processNivel: string; }) =>
  //           item.procesoIndicator.trim() == procesoIndicatorArbolModule &&
  //           (item.processNivel == valModifid ||
  //             item.processNivel == valFullAccess)
  //       ).length > 0
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  // // validAccessLevelDelete(module: string, submodule: string): boolean {
  // //   const role: Role[] = this.tokenStorage.getUser()["listRols"];
  // //   const identifierModule = module;
  // //   const procesoIndicatorArbolModule = submodule;
  // //   const valFullAccess = "3";

  // //   if (
  // //     role[0].listModules.filter((item) => item.identifier.trim() == identifierModule)[0].listArbolModulo.filter((item) =>item.procesoIndicator.trim() == procesoIndicatorArbolModule &&item.processNivel == valFullAccess).length > 0
  // //   ) {
  // //     return false;
  // //   } else {
  // //     return true;
  // //   }
  // // }

  // validAccessLevelDelete(module: string, submodule: string): boolean {
  //   const role: Role[] = this.tokenStorage.getUser()["listRols"];
  //   const identifierModule = module;
  //   const procesoIndicatorArbolModule = submodule;
  //   const valFullAccess = "3";
  //   let listModules: any[] = [];

  //   if (role.length == 1){
  //     if (
  //        role[0].listModules.filter((item: { identifier: string; }) => item.identifier.trim() == identifierModule)[0].listArbolModulo.filter((item: { procesoIndicator: string; processNivel: string; }) =>item.procesoIndicator.trim() == procesoIndicatorArbolModule &&item.processNivel == valFullAccess).length > 0
  //     ) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }else{
  //     role.forEach(rol => {
  //       rol.listModules.forEach((module: any) => {
  //         listModules.push(module);
  //       });
  //     });

  //     // Eliminar modulos repetidos
  //     var hash = {};
  //     listModules = listModules.filter(menuModule => {
  //       var exists = !hash[menuModule.id];
  //       hash[menuModule.id] = true;
  //       return exists;
  //     });

  //     if (
  //       listModules.filter((item) => item.identifier.trim() == identifierModule)[0].listArbolModulo.filter((item: { procesoIndicator: string; processNivel: string; }) =>item.procesoIndicator.trim() == procesoIndicatorArbolModule &&item.processNivel == valFullAccess).length > 0
  //     ) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  // }

  isEmailValid(email: string) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  keyPressAlfaNumeric(event: { keyCode: number; preventDefault: () => any; }) {
    var inp = String.fromCharCode(event.keyCode);
    return /[a-zA-Z0-9-_ ]/.test(inp) ? true : event.preventDefault();
  }

  isEmpty(value: string): boolean {
    return value === undefined || value === null || value.trim().length === 0;
  }

  numberPoint(event: { keyCode: number; preventDefault: () => any; }) {
    // solo numeros y punto
    var inp = String.fromCharCode(event.keyCode);
    return /[0-9.]/.test(inp) ? true : event.preventDefault();
  }
}
