import {Component} from "@angular/core";
import {sideNavAnimation} from "./home.animations";
import {HomeState} from "./home.state";

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.less'],
  animations: [sideNavAnimation]
})
export class HomeComponent {

  constructor(public state: HomeState) { }

}
