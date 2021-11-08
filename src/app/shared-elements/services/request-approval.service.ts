import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestApproval } from '../utils/entities/requestApproval';
import { RequestApprovalList } from '../utils/entities/requestApprovalList copy';
import { RequestApprovalNotific } from '../utils/entities/requestApprovalNotific';
import { UtilsTemp } from '../utils/entities/utils-temp';

@Injectable({
  providedIn: 'root'
})
export class RequestApprovalService {

  private urlEndPoits: string = `${environment.urlGateway}${UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_MAIN}`;

  constructor(private http: HttpClient) { }

  getAllRequestApproval(codUser:string, apps:any): Observable<RequestApprovalList[]> {
    return this.http.post<RequestApprovalList[]>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_FIND_ALL + codUser,apps);
  }

  getOneRequestApproval(codUser:string, raid:number, apps:any): Observable<RequestApprovalList> {
    return this.http.post<RequestApprovalList>(this.urlEndPoits +
      UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_FIND_ONE + codUser + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_SEPARATOR + raid,apps);
  }

  save(request:RequestApproval): Observable<RequestApproval> {
    return this.http.post<RequestApproval>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_SAVE, request);
  }

  getContent(id:number): Observable<any> {
    return this.http.get<any>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_CONTENT + id);
  }

  showNotification(id:number): Observable<any> {
    return this.http.get<any>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_SHOW_NOTIF + id);
  }

  approval(request:RequestApproval, idEntity?:string): Observable<any> {
    const currentIdEntity = idEntity == undefined ? "0" : idEntity
    return this.http.patch<any>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_APPROVAL + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_APPROVAL_PARAM + currentIdEntity, request);
  }

  getRequestApprovalNotification(codUser:string): Observable<RequestApprovalNotific[]> {
    return this.http.get<RequestApprovalNotific[]>(this.urlEndPoits + UtilsTemp.TM_REQUEST_APPROVAL_ROUTE_LIST_NOTIF + codUser);
  }
}
