import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() title: string = 'Default Title';
  @Input() buttonText: string = 'Click me';
  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClick() {
    alert('Hi');
    this.buttonClicked.emit();
  }
}
