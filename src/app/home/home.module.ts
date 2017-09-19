import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SidenavComponent} from "./sidenav/sidenav.component";

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent],
  exports: [HomeComponent]
})
export class HomeModule{

}
