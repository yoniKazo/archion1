import { Component, Input, Output, EventEmitter } from '@angular/core';
import { openCloseAnimation, openCloseShadeAnimation } from './animations';


@Component({
  selector: 'mof-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
  animations: [
    openCloseAnimation,
    openCloseShadeAnimation,
  ]
})
export class PopUpComponent {
  @Input() isOpen = true; 
  @Input() YesTextBtn: string ='אשר';
  @Input() openClose: boolean = true;
  @Input() openCloseShade: boolean = true;
  @Input() zIndex: boolean = false;
  
  
}
