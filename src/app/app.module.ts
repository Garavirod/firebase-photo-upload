import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { LoadComponent } from './components/load/load.component';

/* Firebase */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { AngularFirestore } from "angularfire2/firestore";

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    LoadComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
