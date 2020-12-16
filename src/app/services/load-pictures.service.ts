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
    
    // Reference to firebase storage
    const storageRef = firebase.storage().ref();
    for(const it of images){
      it.isUploading = true;
      if(it.progress >= 100){
        continue;
      }

      const uploadtask: firebase.storage.UploadTask = storageRef.child(`${this.DIR_IMAGES}/${it.nameFile}`).put(it.file);
      uploadtask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        // progres item
        (snapshot: firebase.storage.UploadTaskSnapshot) => 
        it.progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100,
        // Manage error
        (err) => console.error('Error on upload images ',err),
        // All went well
        () => {
         console.log('Image uploaded successfuly!');
         it.url = uploadtask.snapshot.downloadURL;
         it.isUploading = false;
         this.saveImage({name: it.nameFile, url: it.url});
          
        }  
      )
    }

  }

  private saveImage (image: { name:string, url:string} ) {
    this.db.collection(`${ this.DIR_IMAGES }`).add( image );
  }
}
