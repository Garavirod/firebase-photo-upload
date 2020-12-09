import { 
  Directive,
  EventEmitter,
  ElementRef,
  HostListener,
  Input,
  Output
} from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {
  /* To talk with parent */
  @Output() mouseOn: EventEmitter<boolean> = new EventEmitter();
  @Input() files: FileItem [] = [];

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

  /* ----------Validators------------*/

  private canBeLoad(file: File): boolean{
    if(!this.wasDropped(file.name)&&this.isAnImage(file.type)){
      return true;
    }
    return false;
  }


  // Avoid events
  private avoidOpenFile( event ){
    event.preventDefault();
    event.stopPropagation();
  }

  // Verify if not exist the file yet.
  private wasDropped( name: string): boolean{
    for(const file of this.files){
      if(file.nameFile == name){
        console.log('file aleready exist');
        return true;
      }
    }
    return false;
  }

  // Verify if file is an image

  private isAnImage( typeFile: string ): boolean{
    return( typeFile == '' || typeFile == undefined ) ? false : typeFile.startsWith('image');
  }
}
