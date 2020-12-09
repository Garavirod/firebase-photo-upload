import { LoadPicturesService } from './../../services/load-pictures.service';
import { FileItem } from './../../models/file-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {

  isOnDropSection: boolean = false;
  files: FileItem [] = [];

  constructor(public loadPictureservice: LoadPicturesService) { }

  ngOnInit(): void {
  }


  loadPicture () {
    this.loadPictureservice.loadImagesFireBase(this.files);
  }

  testOnElement( event ){
    console.log( event );
    
  }

}
