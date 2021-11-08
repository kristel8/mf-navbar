const DownloadProfileApi = "downloadProfile";
const ReportApi = "reportApi";
const RequestRallied = "network/rallied";
const ApiGatewey = "APIGATEWEY";
const ApiGateweyReporte = "APIGATEWEYREPORTE";
const WebSocketApi = "WEBSOCKET";
const ApiHcenterV3 = "/api/hcenterv3";

export class UtilsTemp {

    static apiGateBase = ApiGatewey;
    static apiGateBaseReporte = ApiGateweyReporte;
    // static securityBase = SeguridadApi;
    static reportBase = ReportApi;
    static downloadProfileBase = DownloadProfileApi;
    static webSocketBase = WebSocketApi;

    static mainRouteSecury = "/api/security";
    // static mainRouteSecury = ApiHcenterV3;

    // static SEC_USER_WEB_MAIN = "/api/usuarios-web";
    static SEC_USER_WEB_MAIN = ApiHcenterV3;

    //Ruta de Authenticacion
    static SEC_AUTH_PREFIJO = "/api/auth";
    static SEC_AUTH_SINGIN = "/api/auth";
    static SEC_AUTH_SINGIN_OAUTH = "/api/auth/signinOAuth";
    static SEC_AUTH_OAUTH_PREFIJO = "/oauth/token";
    static SEC_AUTH_LOGOUT = "/logout";
    static SEC_AUTH_FORGOT_PASSWORD = "/forgot-password/:USER";
    static SEC_AUTH_FORGOT_PASSWORD_MAIL = "/forgot-password/mail";


    //Ruta de Usuario
    static SEC_USER_PREFIJO = "/api/user";
    static SEC_USER_FIND_BY_ID = "/";
    static SEC_USER_DELETE_MANY = "/deleteusers";
    static SEC_USER_DELETE_BY_ID = "/";
    static SEC_USER_FIND_ALL_USER_BY_APP = "/user-app";
    static SEC_USER_FIND_ALL_USER_BY_APPS = "/user-apps";

    static CHECK_DUPLICATES = "/check-duplicates";
    static CHECK_DUPLICATES_TARJETA = "/duplicar-tarjeta";
    static CHECK_ASSOCIATE = "/check-associate-mercahnt";


    //Ruta de Usuario Pos
    static SEC_USER_POS_PREFIJO = ApiHcenterV3 + "/api/operator";
    static SEC_USER_POS_FIND_ALL = "/operador";
    static SEC_USER_POS_FIND_BY_ID = "/";
    //    static SEC_USER_POS_DELETE_MANY = "/deleteusers";
    static SEC_USER_POS_DELETE_BY_ID = "/";

    //Ruta de Menu
    static SEC_MENU_PREFIJO = "/api/modulo";
    static SEC_MENU_FIND_BY_ID = "/";
    static SEC_MENU_DELETE_BY_ID = "/";

    //Ruta de Config
    static SEC_CONFIG_PREFIJO = "/api/config";
    static SEC_CONFIG_LAST = "/last";

    //Ruta de ldap
    static SEC_LDAP_PREFIJO = "/api/ldap";
    static SEC_LDAP_DELETE_MANY = "/deleteldaps";

    //Ruta tipo autenticacion
    static SEC_AUTH_TYPE_PREFIJO = "/type";

    //Ruta de roles
    static SEC_ROL_PREFIJO = "/api/rol";
    static SEC_ROL_FIND_ALL = "/type/";
    static SEC_ROL_FIND_BY_ID = "/";
    static SEC_ROL_DELETE_MANY = "/deleteroles";
    static SEC_ROL_DELETE_BY_ID = "/";
    static SEC_ROL_DELETE_COUNT = "/countrol/";

    //Ruta de rolPos
    static SEC_ROLPOS_PREFIJO = ApiHcenterV3 + "/api/operator";
    static SEC_ROLPOS_ROL = "/rol";
    static SEC_ROLPOS_MODULO = "/modulo";
    static SEC_ROLPOS_FIND_ALL = "/type/";
    static SEC_ROLPOS_FIND_BY_ID = "/";
    static SEC_ROLPOS_DELETE_MANY = "/deleteroles";
    static SEC_ROLPOS_DELETE_BY_ID = "/";
    static SEC_ROLPOS_DELETE_COUNT = "/countrol/";

    //Ruta de Grupo de Tarjeta
    static SEC_GROUD_CARD_PREFIJO = "/api/group/card";

    public REQUEST_RALLIED_ROUTE_MAIN = RequestRallied;
    public REQUEST_RALLIED_ROUTE_ALL = "/findAll";
    public REQUEST_RALLIED_ROUTE_ALL_PAGE = "/findPage";
    public REQUEST_RALLIED_ROUTE_UPDATE_NOTIFICATION = "/update/notification";

    //Merchant Chain Operation
    static TM_MERCHAR_CHAIN_ROUTE_MAIN = ApiHcenterV3 + "/api/merchantchain";
    static TM_MERCHAR_CHAIN_ROUTE_FIND_BY_ID = "/";
    static TM_MERCHAR_CHAIN_ROUTE_DELETE_BY_ID = "/";

    //Merchant Operation
    static TM_MERCHAR_ROUTE_MAIN = ApiHcenterV3 + "/api/merchant";
    static TM_MERCHAR_ROUTE_FIND_BY_ID = "/";
    static TM_MERCHAR_ROUTE_PAGE = "/PageFind";
    static TM_MERCHAR_ROUTE_PAGE_LITE = "/PageFindLite";
    static TM_MERCHAR_ROUTE_PAGE_BY_APP = "/PageFindByApp";
    static TM_MERCHAR_ROUTE_PAGE_LITE_CHAIN = "/PageFindLiteChain";
    static TM_MERCHAR_ROUTE_DUPLICATE_RUC = "/check-duplicate-ruc";

    //Donwload Profile Operation
    static TM_DOWNLOAD_PROFILE_ROUTE_MAIN = "/api/dwprofile";

    //Profile Merchant Operation
    static TM_PROFILE_MERCHAR_ROUTE_MAIN = ApiHcenterV3 + "/api/merchantprofile"
    static TM_PROFILE_MERCHAR_ROUTE_FIND_BY_ID = "/";
    static TM_PROFILE_MERCHAR_ROUTE_DELETE_BY_ID = "/";

    //Ruta de Terminales
    static TM_TERMINAL_ROUTE_MAIN = ApiHcenterV3 + "/api/terminal";
    static TM_TERMINAL_ROUTE_PAGE = "/PageFind/";
    static TM_TERMINAL_ROUTE_DELETE = "/delete";
    static TM_TERMINAL_ROUTE_FIND_BY_SERIAL = "/findBySerial/";
    static TM_TERMINAL_ROUTE_PAGE_BY_APP = "/PageFindByApp/";

    //Ruta de bines
    static TM_BINES_ROUTE_MAIN = ApiHcenterV3 + "/api/operator-range";
    static TM_BINES_ROUTE_MAIN_UPDATE = '/'
    static TM_BINES_ROUTE_MAIN_SAVE = '/'
    static TM_BINES_ROUTE_MAIN_DELETE = '/delete'
    static TM_BINES_ROUTE_CHECK_COLLISION = '/checkCollision'

    //Ruta de categorias
    static TM_CATEGORY_ROUTE_MAIN = ApiHcenterV3 + "/api/category";
    static TM_CATEGORY_ROUTE_MAIN_UPDATE = '/'
    static TM_CATEGORY_ROUTE_MAIN_SAVE = '/'
    static TM_CATEGORY_ROUTE_MAIN_DELETE = '/delete'
    static TM_CATEGORY_ROUTE_CHECK_COLLISION = '/checkCollision'
    static TM_CATEGORY_ROUTE_CHECK_ONE_IN_USE = '/check-in-use'
    static TM_CATEGORY_ROUTE_CHECK_MANY_IN_USE= '/check-many-in-use'



    //Ruta de subcategorias
    static TM_SUB_CATEGORY_ROUTE_MAIN = ApiHcenterV3 + "/api/subCategory";
    static TM_SUB_CATEGORY_ROUTE_MAIN_UPDATE = '/'
    static TM_SUB_CATEGORY_ROUTE_MAIN_SAVE = '/'
    static TM_SUB_CATEGORY_ROUTE_MAIN_DELETE = '/delete'
    static TM_SUB_CATEGORY_ROUTE_CHECK_COLLISION = '/checkCollision'
    static TM_SUB_CATEGORY_ROUTE_CHECK_ONE_IN_USE = '/check-in-use'
    static TM_SUB_CATEGORY_ROUTE_CHECK_MANY_IN_USE= '/check-many-in-use'

    //Ruta de afilaidos merc
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_MAIN = ApiHcenterV3 + "/api/affilitate-merchant-chain";
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_MAIN_UPDATE = '/';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_MAIN_SAVE = '/';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_MAIN_DELETE = '/delete';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_CHECK_COLLISION = '/checkCollision';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_AVAIBLE_CHAINS = '/chains-avaible';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_ASSIGNED_CHAINS= '/chains-assigned';
    static TM_SUB_AFFILIATE_MERC_CHAIN_ROUTE_MODIFY_ASSIGNED_CHAINS= '/modifyAfilliateMerchant';


    //Ruta de limite de actividad
    static TM_LIMIT_ROUTE_MAIN = ApiHcenterV3 + "/api/activity-limit";
    static TM_LIMIT_ROUTE_FULL_GROUPCARD = "/groupcards";
    static TM_LIMIT_ROUTE_FULL_TRANSACTION = "/transactions";
    static TM_LIMIT_ROUTE_FULL_LIMITS = "/limit";

    //Ruta de Quota Operation
    static TM_QUOTA_ROUTE_MAIN = ApiHcenterV3 + "/api/merchant-quota";
    static TM_QUOTA_ROUTE_FULL = "/qoutasModule";
    static TM_QUOTA_ROUTE_FULL_MERCHANT = "/merchants";
    static TM_QUOTA_ROUTE_FULL_QUOTAS = "/quotas";
    static TM_QUOTA_ROUTE_FULL_APPS = "/apps";
    static TM_QUOTA_ROUTE_FULL_TRANSACTION = "/transactions";

    //Filtros (Por determinal)
    static TM_TERMINAL_DICTIONARY_FILTER_STATUS_TERMINAL = "/EstadoTerminal";
    static TM_TERMINAL_DICTIONARY_FILTER_MOTIVO_TERMINAL = "/MotivoTerminal";
    static TM_TERMINAL_DICTIONARY_FILTER_TIPO_TERMINAL = "/TipoTerminal";
    static TM_TERMINAL_DICTIONARY_FILTER_MODELO_TERMINAL = "/ModeloTerminal";

    //Reporte
    static TM_REPORT_ROUTE_MAIN = "/api/"
    static TM_REPORT_ROUTE_TERMINAL = "terminales";
    static TM_REPORT_ROUTE_TERMINAL_TEST = "terminalesTest/usuario/";
    static TM_REPORT_ROUTE_TRANSACTION = "transacciones";
    static TM_REPORT_ROUTE_TRANSACTION_TEST = "transaccionesTest/usuario/";
    static TM_REPORT_ROUTE_TRANSACTION_ALL = "transaccionesAll/usuario/";
    static TM_REPORT_ROUTE_MERCHANT = "comercios";
    static TM_REPORT_ROUTE_MERCHANT_TEST = "comercios/usuario/";

    //Servicio de Diccionario
    static TM_DICCIONARY_ROUTE_MAIN = ApiHcenterV3 + "/api/dictionary"
    static TM_DICCIONARY_ROUTE_FIND_BY_ID = "/"
    static TM_DICCIONARY_DP_ROUTE_FIND_BY_MERCHANT_CHAIN = "/download-profile/"

    static TM_DICCIONARY_MAIN_TRANSACTION = "/transaction";
    static TM_DICCIONARY_ROUTE_TRANSACTION_BY_APP = "/";

    //Applicacion
    static TM_APPLICATION_ROUTE_LIST = "/app";

    static TM_CHANGETYPE_ROUTE_LIST = "/changeType";

    static TM_MONEDA_ROUTE_LIST = "/moneda";

    //Download Version
    static TM_DOWNLOAD_VERSION_ROUTE_MAIN = '/api/version';
    static TM_DOWNLOAD_DELETE_BY_ID = "/";
    static TM_DOWNLOAD_FILES = "/files";
    static TM_DOWNLOAD_ADD_FILES = "/addFiles";
    static TM_DOWNLOAD_UPLOAD_VERSION = "/upload";
    static TM_DOWNLOAD_UPDATE_VERSION = "/";
    static TM_DOWNLOAD_VERSIONS_BY_APPID = "/application/:APPID";

    //Ruta de Monitoreo
    static SEC_MONITOREO_PREFIJO = "/api";
    static SEC_MONITOREO = "/download-profile/";

    static TM_DOWNLOAD_PACKAGE_BY_APPID = "/application/:APPID/package";

    //Download Plan
    static TM_DOWNLOAD_PLAN_ROUTE_MAIN_TER = "/api/hcenterv3/api/terminal/dprofile";
    static TM_DOWNLOAD_PLAN_ROUTE_MAIN = '/api/download-profile';
    static TM_DOWNLOAD_PLAN_DELETE_BY_ID = "/";
    static TM_DOWNLOAD_PLAN_BY_ID = "/";
    static TM_DOWNLOAD_PLAN_UPDATE = "/";
    static TM_DOWNLOAD_PLAN_SAVE = "/";
    static TM_DOWNLOAD_PLAN_STATUS_BY_ID_AND_DATE_RAGE = "/:PROFILEID/status/:STARTDATE/:ENDDATE";
    static TM_DOWNLOAD_PLAN_TERMINALS_BY_ID_AND_DATE_RAGE = "/:PROFILEID/terminal/:STARTDATE/:ENDDATE";
    static TM_DOWNLOAD_PLAN_STATUS_ALL_AND_DATE_RAGE = "/status/:STARTDATE/:ENDDATE";
    static TM_DOWNLOAD_PLAN_TERMINALS_ALL_AND_DATE_RAGE = "/terminal/:STARTDATE/:ENDDATE";

    static TM_DOWNLOAD_PLAN_TERMINALS_ASSIGNMENTS = "/terminalprofile";
    static TM_DOWNLOAD_PLAN_MERCHANTS_ASSIGNMENTS = "/merchantprofile";

    static TM_DOWNLOAD_PLAN_BY_VERSION = "/version/:VERSIONID";

    //Request Approval Operation
    static TM_REQUEST_APPROVAL_ROUTE_MAIN = ApiHcenterV3 + "/api/mancomunado/req-approval";
    static TM_REQUEST_APPROVAL_ROUTE_FIND_ALL = "/";
    static TM_REQUEST_APPROVAL_ROUTE_FIND_ONE = "/findOne/";
    static TM_REQUEST_APPROVAL_ROUTE_SAVE = "/";
    static TM_REQUEST_APPROVAL_ROUTE_CONTENT = "/content/";
    static TM_REQUEST_APPROVAL_ROUTE_SHOW_NOTIF = "/showNotication/";
    static TM_REQUEST_APPROVAL_ROUTE_APPROVAL = "/approval";
    static TM_REQUEST_APPROVAL_ROUTE_APPROVAL_PARAM = "?idEntity=";
    static TM_REQUEST_APPROVAL_ROUTE_LIST_NOTIF = "/getNotificationList/";

    static TM_REQUEST_APPROVAL_ROUTE_SEPARATOR = "/";

    //Audit
    static TM_AUDIT_ROUTE_MAIN = ApiHcenterV3 + "/api/audit";
    static TM_AUDIT_ROUTE_ALL_MODULE = "/module";
    static TM_AUDIT_ROUTE_ALL_OPER_TYPE = "/RequestOperType";
    static TM_AUDIT_ROUTE_ALL_USER_WEB = "/userWeb";
    static TM_AUDIT_ROUTE_SAVE_AUDIT = "/save";
    static TM_AUDIT_ROUTE_SAVE_PARAM = "?type=";


    static dummyUser: string = "EGONZALEZ";

    static TM_MANCOMUNADO_SUPERVISOR = ApiHcenterV3 + "/api/mancomunado/supervisor";
    static TM_MANCOMUNADO = ApiHcenterV3 + "/api/mancomunado";

    //WebSocket Path
    static WEBSOCKET_MAIN = "/api/web-socket";

    static WEBSOCKET_END_POINT_PATH = "/download-profile";
    static WEBSOCKET_PREEFIX_RECEIVE_PATH = "/monitoring";//Info: El "RECEIVED" en el fron es el "EMIT" en el back
    static WEBSOCKET_RECEIVE_TERMINALS_OF_PLAN_PATH = "/terminals-plan";
    static WEBSOCKET_RECEIVE_ALL_TERMINALS_PATH = "/terminals-all";


    //Reports Path
    static TM_REPORTE_ANALITICO_MAIN= ApiHcenterV3 + "/api/analytical-report";
    static TM_REPORTE_ANALITICO_YEARMONTH= "/listaYearMonth";
    static TM_REPORTE_ANALITICO_RESULT= "/listaresultados";
    static TM_REPORTE_ANALITICO_DESTINY= "/listaDestiny";
    static TM_REPORTE_ANALITICO_GROUP= "/listaGrupo";
    static TM_REPORTE_ANALITICO_APPLICATION= "/listaAplicacion";
    static TM_REPORTE_ANALITICO_ESTADO= "/listaEstado";

    static TM_REPORTE_ANALITICO_MODELO= "/listaModelo";

    static TM_REPORTE_ANALITICO_CANTIDAD_APLICACION= "/listaCantidadxAplicacion";
    static TM_REPORTE_ANALITICO_CANTIDAD_ESTADO= "/listaCantidadxEstado";
    static TM_REPORTE_ANALITICO_TRANSACCIONES_TIPO= "/listaTransaccionesxtipo";
    static TM_REPORTE_ANALITICO_Errores_TIPO= "/listaErroesxtipo";
    static TM_REPORTE_ANALITICO_Errores_DATE= "/listaErroesxdate"

    static TM_REPORTE_ANALITICO_TRANSACCIONES_DIA= "/listaTransaccionesxDia";
    static TM_REPORTE_ANALITICO_TIEMPODIA= "/listaTiempoxDia";
    static TM_REPORTE_ANALITICO_TIEMPOHORA= "/listaTiempoxHora";
    static TM_REPORTE_ANALITICO_TIEMPOTIPO= "/listaTiempoxTipo";

    static TM_REPORTE_ANALITICO_TYPE= "/listaTipoTransaccion";

    static TM_REPORTE_ANALITICO_TIEMPO_PROMEDIO= "/TiempoPromedio";
    static TM_REPORTE_ANALITICO_TIEMPO_MAXIMO= "/TiempoMaximo";


    static TM_REPORTE_ANALITICO_TIEMPO_PROMEDIO_TOTAL ="/TiempoPromediototal";
    static TM_REPORTE_ANALITICO_TIEMPO_MAXIMO_TOTAL ="/TiempoMaximototal";


    //Event path
    static EVENT_MAIN = "/api/event";

    static EVENT_REQUEST_LOG = "/request_log"

    // Commissions
    static TM_COMMISSIONS_MAIN= "/api/hcenterv3/api/commissiones";
    static TM_TRANSACTION_MAIN= "/api/hcenterv3/api/commissiones/transaction";
    static TM_COMMISSIONS_CREATE= "/api/hcenterv3/api/commissiones/create";
    static TM_COMMISSIONS_UPDATEE= "/api/hcenterv3/api/commissiones/update";
    static TM__REPORT_COMMISSIONS= "/api/hcenterv3/api/reportCommissiones";
    static TM_COMMISSIONS_EXIST= "/api/hcenterv3/api/commissiones/exist";

    // Aplicaciones
    static TM_MANT_APPLICATION_MAIN= "/api/hcenterv3/api/applicationmant";
    static TM_MONEDAS= "/api/hcenterv3/api/dictionary/allMonedas";

    // Transacciones
    static TM_MANT_TRANSACTION_MAIN= "/api/hcenterv3/api/transactionMant";

    // GroupCard Mnatenimiento
    static TM_MANT_GROUP_CARD_MAIN= "/api/hcenterv3/api/group-card";

    // Afikiados
    static TM_MANT_AFILIADOS= "/api/hcenterv3/api/afiliados";

    static TM_MANT_AFILIADOS_LOCATE= "/api/hcenterv3/api/affilitate-locate";

    static TM_MANT_AFILIADOS_LOCATE_UBICACION= "/api/hcenterv3/api/affilitate-locate/ubicacion";

    static TM_MANT_AFILIADOS_LOCATE_SELECTED= "/api/hcenterv3/api/affilitate-locate/ubicacionselect";
    //Opciones por afiliado
    static TM_MANT_OPCIONES_AFILIADOS= "/api/hcenterv3/api/afiliate-options";



    // Campos Generales

    static TM_GENERAL_FIELD_LIST= "/api/hcenterv3/api/generalparameter/PageFind";
    static TM_GENERAL_FIELD_CREATE= "/api/hcenterv3/api/generalparameter";
    static TM_GENERAL_FIELD_DELETE= "/api/hcenterv3/api/generalparameter/delete";

    static TM_CONEXION_BD= "/api/hcenterv3/api/dbconexion";
    //

    static TM_EXCHANGE_RATE_LIST= "/api/hcenterv3/api/tipocambio";
    static TM_EXCHANGE_RATE_CREATE= "/api/hcenterv3/api/tipocambio";
}
