import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {
  
  transform(...value: any): unknown {
    let categories = value["1"];
    let categoryIds = value["0"];
    return categoryIds.map((id : any) => this.findCategoryName(id, categories));  
    // if (value["0"].length > 1) {
    //   let s = "";
    //   for (let i = 0; i < value.length; i++) {
    //     s = this.findCategortName(value["0"],categories);
    //     s += value[i] +" , " + "\n" ;
    //   }
    //   return s;
    // }
    // return this.findCategortName(value["0"],categories);
  }

  findCategoryName(id : string, categories : any) : any{
    for (const categoryObject of categories) {
      for (const category of categoryObject) {
        if (category._id === id) {
          return "\n"  + category.name +  "\n";
          
        }
      }
    }
  }

}
