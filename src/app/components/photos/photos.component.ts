import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'; 
import { Observable } from 'rxjs/Observable';

/* Element obtaind ina get petition through an interface */
export interface Item { name: string; url: string; }

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private itemCollection : AngularFirestoreCollection<Item>;
  items:Observable<Item[]>;

  constructor( private afs: AngularFirestore) { 
    this.itemCollection = afs.collection<Item>('img'); //where img is the directory you saved images on firebase
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit(): void {
  }

}
