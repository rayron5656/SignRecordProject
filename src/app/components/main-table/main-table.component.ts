
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild,AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, Observable, observable } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Header } from 'src/app/models/header';
import { snapshot } from 'src/app/models/Snapshot';
import { autoFill } from 'src/app/models/AutoFillModel';
import { StatusConfig } from 'src/app/models/statusConfig';
import { AuthService } from 'src/app/services/auth.service';
import { FilterServiceService } from 'src/app/services/filter-service.service';
import { HttpService } from 'src/app/services/http.service';
import {HeaderHandler} from '../../models/HeaderHandler';
import { Word } from 'src/app/models/word';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css'],
})
export class MainTableComponent implements OnInit ,AfterViewInit,OnChanges {

  tableText = "Loading...";
  
  
  @ViewChild('view1') viewport1: CdkVirtualScrollViewport | undefined;
  
  @ViewChild('view2') viewport2: CdkVirtualScrollViewport | undefined;

  langs : autoFill[] = [];

  filterObserver : Observable<any> | undefined;
  
  selectedLang = '';
  words : Word[] =  [];
  exampleHeaders = [{name : "Base"},{name : "Indexer"},{name : "Linguistic"},{name : "Animator"}];
  signLanguage : any;
  languages : any;
  exampleStatus = [ "Complete","Cancelled","Pending","Awaiting","Warning"];
  categoriesForCheck : string[] = [];

  switchOne : Boolean = false;

  filterToggled : Boolean = false;
  
  button : string = "edit";

  allHeaders : Header[] = [
  {width:200,name : "title"},
  {width:200,name : "categories"},
  {width:200,name : "language"},
  {width:150,name : "status"},
  {width:100,name : "noFiles"},
  {width:100,name : "updatedAt"},
  {width:150,name : "updatedBy"},
  {width:80,name : "edit"},
  ]
  
  displayHeader : Header[] = this.allHeaders;

  filterForm : FormGroup;
  
  
  headersForm: FormGroup;
  
  ngOnInit() {
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/login']);
      
    }

    
  }
  constructor(
    private fb : FormBuilder,
    private authService :AuthService,
    private http : HttpService,
    private router : Router,
    private filterService :FilterServiceService
  ) {
    
    
    this.filterForm = this.fb.group({
      search: ['',Validators.required],
      category  : ['',Validators.required],
      status : ['',Validators.required],
      signLanguage : ['',Validators.required],
      spokenLanguage : ['',Validators.required],
    });

    
    this.filterForm.valueChanges.subscribe((value)=>{
      this.filterService.setFilter(value);
    })

    this.filterService.getFilterObservable().pipe(
      debounceTime(500)
      
    ).subscribe((value)=>{
      console.log(this.words);
      this.words = this.words.filter((word)=>{
        if( value.search !== ''){
          if (word.title.includes(value.search)) {
            return true;
          }
          return false;
        }
        return true;
      })
    })

    this.headersForm = this.fb.group({
      title: [true,Validators.required],
      categories  : [true,Validators.required],
      language : [true,Validators.required],
      status : [true,Validators.required],
      noFiles : [true,Validators.required],
      updatedAt : [true,Validators.required],
      updatedBy : [true,Validators.required],
      edit  : [true,Validators.required],
    });
    
    
  }
  ngOnChanges(): void {
    
  }

  ngAfterViewInit(): void {
    

    
    if (this.viewport1 !== undefined && this.viewport2 !== undefined) {
      this.viewport2.elementScrolled().subscribe(() => {
        if (this.viewport1 && this.viewport2) {
          this.viewport1.scrollTo({ left: this.viewport2.measureScrollOffset('left') });
        }
      });
    }

    this.headersForm.valueChanges.subscribe((value)=>{
      this.displayHeader = HeaderHandler(value,this.allHeaders);
    });

    

    this.http.getAllLanguages().subscribe((res : any) => {
      this.languages = res.snapshots as snapshot[];
      for (let index = 0; index < this.languages.length; index++) {
        const element = this.languages[index];
        this.langs.push({
          name : element.snapshotLanguage
        });
      }
      this.http.getAllWordsByLanguage(this.langs[0].name).subscribe((res : any) => {
        this.words = res;
        // sort words by title
        this.words.sort((a,b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        this.selectedLang = this.langs[0].name;
        this.configCategories();
      });
    });
  }


  configCategories() {
    this.categoriesForCheck = [];
    for (let index = 0; index < this.words.length; index++) {
      const element : Word = this.words[index];
      if (element.categories.length > 0) {
        for (let index = 0; index < element.categories.length; index++) {
          const element2 = element.categories[index];
          if (this.categoriesForCheck.indexOf(element2) === -1) {
            this.categoriesForCheck.push(element2);
          }
        }
      }
    }
  }

  onLanguageChange(event : string){
    this.words = [];
    this.http.getAllWordsByLanguage(event).subscribe((res : any) => {
      this.words = res;
      console.log(this.words);
      this.selectedLang = event;
      this.configCategories();
    });
  }

  GetNumberOfFiles(word : any){
    if (word?.sign?.animation?.avatars?.length > 0) {
      var num = 0;
      for (const key in word.sign.animation.avatars) {
        if (Object.prototype.hasOwnProperty.call(word.sign.animation.avatars, key)) {
          const element = word.sign.animation.avatars[key];
          if (element.files.length > 0) {
            num++;
            
          }
        }
      }
      return num;
    }
    return 0;
  }
  

  onSwitchOne(){
    if (this.switchOne) {
      this.switchOne = false;

    }
    else{
      this.switchOne = true;
    }

  }

  setOrder(header : string){
    var placeHolderWords : Word[] = this.words;
    this.words = [];
    switch (header) {
    }
    this.words = placeHolderWords;
  }

  headerChanger(string : any){ //switch on predeterminated headers
    switch (string) {
      case "Base":
        this.headersForm.patchValue({
          categories  : true,
          language : false,
          status : true,
          noFiles : true,
          updatedAt : true,
          updatedBy : true,
        });
        break;
      case "Linguistic":
        this.headersForm.patchValue({
          categories  : true,
          language : true,
          status : true,
          noFiles : false,
          updatedAt : true,
          updatedBy : true,
        });
        break;
      case "Animator":
        this.headersForm.patchValue({
          categories  : false,
          language : true,
          status : true,
          noFiles : true,
          updatedAt : true,
          updatedBy : true,
        });
        break;
      case "Indexer":
        this.headersForm.patchValue({
          categories  : false,
          language : false,
          status : false,
          noFiles : false,
          updatedAt : false,
          updatedBy : false,
        });
        break;
    
      default:
        this.headersForm.patchValue({
          categories  : true,
          language : true,
          status : true,
          noFiles : true,
          updatedAt : true,
          updatedBy : true,
        });
        break;
    }
    
  }

  headerIncludes(header : string){
      for (const h of this.displayHeader) {
        if (h.name === header) {
          return true;
        }
      }
      return false;
  }
  toggleFilter(){
    if (this.filterToggled) {
      this.filterToggled = false;
    }
    else{
      this.filterToggled = true;
    }
  }

  configureStatusClass(string : string){
    return StatusConfig(string);
  }
}

