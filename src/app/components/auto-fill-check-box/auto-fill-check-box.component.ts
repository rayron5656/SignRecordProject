import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-fill-check-box',
  templateUrl: './auto-fill-check-box.component.html',
  styleUrls: ['./auto-fill-check-box.component.css']
})
export class AutoFillCheckBoxComponent implements OnInit {

  constructor() { }
  bool : boolean = true;
  @Input() label: string = '';
  @Input() values: any[] = [];

  ngOnInit(): void {
  }
  
  change(){
    console.log("change");
    if (this.bool) {
      this.bool = false;
    
    }else
    {
      this.bool = true;
    }
    
  }

}
