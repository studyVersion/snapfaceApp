import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";


const routes: Routes =[
  { path: 'facesnaps' , component: FaceSnapListComponent}
  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
