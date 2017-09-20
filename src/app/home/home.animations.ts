import {animate, state, style, transition, trigger} from "@angular/animations";

export const sideNavAnimation =
  trigger('open', [
    state('inactive', style({
      left: '-180px'
    })),
    state('active', style({
      left: '0px',
      top: '50px'
    })),
    transition('inactive <=> active', animate('300ms ease-out'))
  ]);
