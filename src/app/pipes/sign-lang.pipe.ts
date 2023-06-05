import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'signLang'
})
export class SignLangPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var countryList = args[0][0];
    var languageList = args[0][1];
    var languageId = args[0][2];
    var countryId = value;
    var countryName = countryList.find((country : any) => {
      if(country._id == countryId){
        return country.name;
      }
      return undefined;
      
    });
    console.log(countryName);
    if (countryName === undefined) {
      return "Not Found";
      
    } else {
      var languageName = languageList.find((language : any) => {
        if(language._id == languageId){
          return language.name;
        }
      });
      return (countryName.name + " - " + languageName.name);
      
    }
    
  }

}
