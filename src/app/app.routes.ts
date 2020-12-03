import { LoadComponent } from './components/load/load.component';
import { PhotosComponent } from './components/photos/photos.component';
import { Routes, RouterModule } from '@angular/router';
const ROUTES: Routes = [
    {path:'photos', component:PhotosComponent},
    {path:'load', component:LoadComponent},
    {path:'**', pathMatch:'full', redirectTo:'photos'},
];

export const APP_ROUTES = RouterModule.forRoot( ROUTES );