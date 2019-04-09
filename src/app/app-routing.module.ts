import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {
HomeComponent,
CurrentyDetailsComponent,
PageNotFoundComponent
} from './components';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'currenty/:id', component: CurrentyDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
