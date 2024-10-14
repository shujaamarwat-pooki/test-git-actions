import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-image',
  templateUrl: './button-image.component.html',
  styleUrls: ['./button-image.component.scss']
})
export class ButtonImageComponent {
  @Input() title: string = 'Default Title';
  @Input() buttonText: string = 'Click me';
  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClick() {
    alert('Hi Image');
    this.buttonClicked.emit();
  }

}



