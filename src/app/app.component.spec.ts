import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, Type } from '@angular/core';
import { ButtonComponent } from './block/button/button.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});

declare const require: any;

function createComponentTest(componentType: Type<any>) {
  describe(`${componentType.name} Component`, () => {
    let componentFixture: ComponentFixture<any>;
    let componentInstance: any;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [componentType],
      }).compileComponents();
    });

    beforeEach(() => {
      componentFixture = TestBed.createComponent(componentType);
      componentInstance = componentFixture.componentInstance;
      componentFixture.detectChanges();
    });

    it('should create the component', () => {
      expect(componentInstance).toBeTruthy();
    });
  });
}



// Use Webpack's require.context to dynamically load all components from app/block
const context = require.context('src/app/block', true, /\.component\.ts$/);

// Iterate over each dynamically loaded module and create tests
context.keys().forEach((fileName: string) => {
  const componentModule = context(fileName);
  const componentType = Object.values(componentModule)[0]; // Get the component class
  createComponentTest(componentType as Type<any>);
});
