import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRedComponent } from './button-red.component';

describe('ButtonRedComponent', () => {
  let component: ButtonRedComponent;
  let fixture: ComponentFixture<ButtonRedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonRedComponent]
    });
    fixture = TestBed.createComponent(ButtonRedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
