import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigSegUser } from '../utils/entities/config-seg-user';
import { UtilsTemp } from '../utils/entities/utils-temp';

@Injectable({
  providedIn: 'root'
})

export class ConfigUserService {

  private urlEndPoint: string = `${environment.urlGateway}${UtilsTemp.SEC_USER_WEB_MAIN}${UtilsTemp.SEC_CONFIG_PREFIJO}`;

  constructor(private http: HttpClient) { }

  create(data: ConfigSegUser): Observable<ConfigSegUser> {
    return this.http.post<ConfigSegUser>(this.urlEndPoint, data);
  }

  getLastConfig(): Observable<ConfigSegUser> {
    return this.http.get<ConfigSegUser>(this.urlEndPoint + UtilsTemp.SEC_CONFIG_LAST);
  }

}
