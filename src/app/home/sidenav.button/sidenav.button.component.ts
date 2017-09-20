import {Component, Input} from "@angular/core";
@Component({
  moduleId: module.id,
  selector: 'sidenav-button-component',
  templateUrl: 'sidenav.button.component.html',
  styleUrls: ['sidenav.button.component.less']
})
export class SidenavButtonComponent {

  @Input() icon: string;
  @Input() title: string;

}
