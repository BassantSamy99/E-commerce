import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterName:string=''
  @Input() categories:any[] =[];
  @Output() selectedItem:EventEmitter<string>=new EventEmitter<string>();
  constructor() {}
  chosenCategory(event:any) {
    this.selectedItem.emit(event);
  }

}
