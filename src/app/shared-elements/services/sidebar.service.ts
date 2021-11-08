import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  subject = new BehaviorSubject<boolean>(false);
  channel$ : Observable<boolean> = this.subject.asObservable();

  constructor() { }

  isOpenSidenav(isClosed: boolean): void {
    this.subject.next(isClosed);
  }
}
