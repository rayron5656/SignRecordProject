
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import {} from 'parse-json';
import { Word } from 'src/app/models/word';
import { AuthService } from 'src/app/services/auth.service';
import { CategoryFields } from 'src/app/models/categoryFields';

@Component({
  selector: 'app-word-parser',
  templateUrl: './word-parser.component.html',
  styleUrls: ['./word-parser.component.css']
})
export class WordParserComponent implements OnInit {

form: FormGroup;

fileName : string = "";

headers : boolean = true;

@Output() data = new EventEmitter<any>();
@Output() error = new EventEmitter<any>();



file : any ;


constructor(public fb : FormBuilder,private http : HttpService,private authServeice : AuthService) { 
  this.form = this.fb.group({
    avatars: [null]
  })
}

ngOnInit(): void {
  
}

replaceSymbols(text : string) : string {
  text = text.replace(/,/g, "");
  text = text.replace(/-/g, "");
  text = text.replace(/_/g, "");
  text = text.replace(/:/g, "");
  text = text.replace(/;/g, "/");
  text = text.replace(/"/g, "");
  text = text.replace(/'/g, "");
  text = text.replace(/\./g, "");
  text = text.replace(/\(/g, "");
  text = text.replace(/\)/g, "");
  // text = text.replace(/\//g, "");
  // text = text.replace(/\\/g, "");
  text = text.replace(/\[/g, "");
  text = text.replace(/\]/g, "");
  text = text.replace(/\{/g, "");
  text = text.replace(/\}/g, "");
  text = text.replace(/\|/g, "");
  text = text.replace(/\?/g, "");
  text = text.replace(/!/g, "");
  text = text.replace(/@/g, "");
  text = text.replace(/#/g, "");
  text = text.replace(/\$/g, "");
  text = text.replace(/%/g, "");
  text = text.replace(/\^/g, "");
  text = text.replace(/&/g, "and");
  text = text.replace(/\*/g, "");
  text = text.replace(/\+/g, "");
  text = text.replace(/=/g, "");
  text = text.replace(/`/g, "");
  text = text.replace(/~/g, "");
  text = text.replace(/</g, "");
  text = text.replace(/>/g, "");
  text = text.toLowerCase();
  return text;
}

replaceSymbolsWord(text : string) : string {
  text = text.replace(/-/g, " ");
  text = text.replace(/_/g, " ");
  text = text.replace(/:/g, "");
  text = text.replace(/;/g, "/");
  text = text.replace(/"/g, "");
  text = text.replace(/\./g, "");
  text = text.replace(/\(/g, "");
  text = text.replace(/\)/g, "");
  text = text.replace(/\//g, "");
  text = text.replace(/\\/g, "");
  text = text.replace(/\[/g, "");
  text = text.replace(/\]/g, "");
  text = text.replace(/\{/g, "");
  text = text.replace(/\}/g, "");
  text = text.replace(/\|/g, "");
  text = text.replace(/\?/g, "");
  text = text.replace(/!/g, "");
  text = text.replace(/@/g, "");
  text = text.replace(/#/g, "");
  text = text.replace(/\$/g, "");
  text = text.replace(/%/g, "");
  text = text.replace(/\^/g, "");
  text = text.replace(/&/g, "and");
  text = text.replace(/\*/g, "");
  text = text.replace(/\+/g, "");
  text = text.replace(/=/g, "");
  text = text.replace(/`/g, "");
  text = text.replace(/~/g, "");
  text = text.replace(/</g, "");
  text = text.replace(/>/g, "");
  text = text.toLowerCase();
  
  
  return text;
}




upload (event : any) {
  try {
  this.setLoading(true);
  this.fileName = event.target.files[0].name;
  let data : any[] = [];
  let jsonFile = event.target.files[0];
  let reader = new FileReader();
  let categoryCounter = 0;
  let wordCounter = 0;

  reader.readAsText(jsonFile);

  reader.onerror = () => {
    this.fileName = "";
    this.error.emit("Error reading file");
    this.setLoading(false);
  };

  reader.onload = () => {
    if (reader.result) {
      this.file = JSON.parse(reader.result.toString());
      for (let category in this.file) {
        if (this.file.hasOwnProperty(category)) {
          let wordsUnderCategory = this.file[category];
          categoryCounter++;
          let categoryField : CategoryFields = {
            category : this.replaceSymbols(category),
            words : []
          }
          for (let key in wordsUnderCategory) {
            if (wordsUnderCategory.hasOwnProperty(key)) {
              wordCounter++;
              let word : any = wordsUnderCategory[key];

              if (word !== null && word !== undefined && word !== "") {
                categoryField.words.push(word);

              }
            }
        }
        data.push(categoryField);

      }
    }
  }
  console.log("wordCounter: " + wordCounter);
  console.log("categoryCounter: "+categoryCounter);
  this.data.emit(data);
  this.setLoading(false);
    }
  } catch (error : any) {
    this.fileName = "";
    this.setLoading(false);
    this.error.emit(error);
  }
}


setLoading(state: boolean) {
  document.getElementById("loading")!.className = state ? "visible" : "hidden";
  document.getElementById("buttonText")!.className = state ? "hidden" : "visible";
  document.getElementById("text")!.className = this.fileName != "" ? "hidden" : "visible";
  document.getElementById("fileName")!.className = this.fileName != "" ? "visible" : "hidden";
  }

}
