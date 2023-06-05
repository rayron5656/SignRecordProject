import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-auto-fill-select',
  templateUrl: './auto-fill-select.component.html',
  styleUrls: ['./auto-fill-select.component.css']
})
export class AutoFillSelectComponent implements OnInit,AfterViewInit {

  constructor() {
    
    }
  ngAfterViewInit(): void {
    
  }

  @Input() options: any[] = [];
  @Input() selected : string = "";
  @Input() label: string = "";
  @Output() selectedChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  selectOption(option: any) {
    this.selected = option;
    this.selectedChange.emit(option);
  }

}
