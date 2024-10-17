import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPurpleComponent } from './button-purple.component';

describe('ButtonPurpleComponent', () => {
  let component: ButtonPurpleComponent;
  let fixture: ComponentFixture<ButtonPurpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonPurpleComponent]
    });
    fixture = TestBed.createComponent(ButtonPurpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
