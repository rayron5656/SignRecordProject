import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-new-lang-dictionary',
  templateUrl: './new-lang-dictionary.component.html',
  styleUrls: ['./new-lang-dictionary.component.css']
})
export class NewLangDictionaryComponent implements OnInit {

  data : any = null;
  form : FormGroup;
  @ViewChild('button') button : ElementRef<HTMLElement> | undefined;

  constructor(private  router: Router,private fb : FormBuilder,public uploadService : UploadService) {
    this.form = this.fb.group({
      language : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      region : ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      });
    
  }
  backToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  onSubmit () {
    console.log(this.uploadService.inProgress);
    console.log("submit");
    const {language,region} = this.form.value;
    const data  = this.data;
      let dataToSend = {
        language,
        region,
        data,
        userName : localStorage.getItem('user')
      }
      console.log(dataToSend);

      this.uploadService.setUpload(dataToSend);
      console.log(this.uploadService.inProgress);
      
  }

  ngOnInit(): void {

    console.log(this.uploadService.inProgress);
  }

  onEvent(event : any) {
    this.data = event;
  }
  setLoading(value : boolean,button : any){
    if(value){
      
    }
    else{
      
    }
  }

  onParserError(error : string) {
    console.log("error V");
    console.log(error);
    alert("Please check your file and try again");
  }

  //return true if you want the button disabled
  isValidButton(){
    if (this.data && this.form.valid && !this.uploadService.inProgress) {
      if (this.button) {
        this.button.nativeElement.innerHTML = "Populate";
        return true;
      }
      return false
    }
    else if (this.uploadService.inProgress) {
        if (this.button) {
          this.button.nativeElement.innerHTML = "Loading...";
        }
      return false;
      }
    return false
  }

  isData(){
    if(this.data){
      return true;
    }
    else{
      return false;
    }
  }

}
