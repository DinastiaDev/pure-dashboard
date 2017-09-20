import {Component} from "@angular/core";
import {HomeState} from "../home.state";

@Component({
  moduleId: module.id,
  selector: 'wrapper-header-component',
  templateUrl: 'wrapper.header.component.html',
  styleUrls: ['wrapper.header.component.less']
})
export class WrapperHeaderComponent {

  constructor(public state: HomeState) { }

  changeState() {
    this.state.sideNavMobile = this.state.sideNavMobile === 'inactive' ? 'active'  : 'inactive';
  }

}
