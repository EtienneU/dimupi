import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PictureListComponent} from "./picture-list/picture-list.component";
import {HomePageComponent} from "./home-page/home-page.component";

const routes: Routes = [
  { path: '',         component: HomePageComponent },
  { path: 'pictures', component: PictureListComponent },
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
