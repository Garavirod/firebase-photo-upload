import { FileItem } from './../models/file-item';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoadPicturesService {
  private DIR_IMAGES = 'img';
  constructor(private db: AngularFirestore) { }

  /*  */

  loadImagesFireBase( images: FileItem[] ) {
    console.log(images);    
  }

  private saveImage (image: { name:string, url:string} ) {
    this.db.collection(`${ this.DIR_IMAGES }`).add( image );
  }
}
