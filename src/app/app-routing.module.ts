import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PictureListComponent} from "./picture-list/picture-list.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {SinglePictureComponent} from "./single-picture/single-picture.component";

const routes: Routes = [
  { path: '',             component: HomePageComponent },
  { path: 'pictures',     component: PictureListComponent },
  { path: 'picture/:id',  component: SinglePictureComponent} //:id est une variable dynamique
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
