import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {WrapperComponent} from "./wrapper/wrapper.component";
import {SidenavButtonComponent} from "./sidenav.button/sidenav.button.component";
import {WrapperHeaderComponent} from "./wrapper.header/wrapper.header.component";

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    SidenavButtonComponent,
    WrapperComponent,
    WrapperHeaderComponent
  ],
  exports: [HomeComponent]
})
export class HomeModule{

}

