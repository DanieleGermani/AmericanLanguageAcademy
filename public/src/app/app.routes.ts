import { RouterModule, Routes } from '@angular/router';
import {UserComponent,CamaraComponent,HomeComponent} from './components/index.pages';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'camaras', component: CamaraComponent },


  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
