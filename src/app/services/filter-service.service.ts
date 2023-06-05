import { Injectable } from '@angular/core';
import { Observable , Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterServiceService {

  private subject = new Subject<any>();

  inProgress: boolean = false;

  constructor() { }
  setFilter(data : any) {
    this.subject.next(data);
  }


  
  getFilterObservable() : Observable<any> {
    return this.subject.asObservable();
  }
}
