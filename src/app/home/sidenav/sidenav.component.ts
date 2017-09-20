import {Component} from "@angular/core";
import {sideNavAnimation} from "../home.animations";
import {HomeState} from "../home.state";

@Component({
  moduleId: module.id,
  selector: 'sidenav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.less'],
  animations: [sideNavAnimation]
})
export class SidenavComponent {

  constructor(public state: HomeState) { }

}

