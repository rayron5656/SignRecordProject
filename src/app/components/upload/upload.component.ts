import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    private uploadService: UploadService,
    private http : HttpService
  ) { }

  

  @ViewChild('div') childElement: ElementRef<HTMLElement> | undefined ;

  ngOnInit(): void {
    this.uploadService.getUploadObservable().subscribe((data) => {
      this.setLoading(true);
      this.http.populateDb(data).subscribe(
        (res) => {
          console.log(res);
          alert("Dictionary added successfully");
          this.setLoading(false);
        }
      )
    });
    
  }
  setLoading(bool : boolean){
    if(bool){
      this.childElement?.nativeElement.classList.remove('hidden');
      this.uploadService.inProgress = bool;
    }
    else{
      
      this.childElement?.nativeElement.classList.add('hidden');
      this.uploadService.inProgress = bool;
    }
  }

}
