import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  
  private subject = new Subject<any>();

  inProgress: boolean = false;
  
  constructor() { }
  
  setUpload(data : any) {
    this.subject.next(data);
  }


  
  getUploadObservable() : Observable<any> {
    return this.subject.asObservable();
  }

}
