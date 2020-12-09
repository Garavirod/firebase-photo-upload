import { 
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  /* To talk with parent */
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  /* When mouse starts dragover in the zone*/
  @HostListener('dragover',['$event'])
  public onDragEnter(event: any){
    this.mouseOn.emit(true);
  }

  /* When mouse Leaves the zone */
  @HostListener('dragleave',['$event'])
  public onDragLeave(event: any){
    this.mouseOn.emit(false);
  }

}
