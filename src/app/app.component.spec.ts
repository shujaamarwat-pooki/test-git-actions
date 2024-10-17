import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, Type } from '@angular/core';
import { blocks } from './shared/blocks';
import { toPascalCase } from './shared/utils';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AppComponent', () => {
    expect(component).toBeTruthy();
  });
});

describe('Block List', () => {
  blocks.forEach((block) => {
    const pascalName = toPascalCase(block.name);

    // Wrap dynamic imports in an async function
    const loadComponent = async () => {
      const module = await import(
        `./block/${block.name}/${block.name}.component`
      );
      return module[`${pascalName}Component`];
    };

    describe(`${block.name} Component`, () => {
      let compFixture: ComponentFixture<any>;
      let compInstance: any;

      beforeEach(async () => {
        const componentClass = await loadComponent();
        await TestBed.configureTestingModule({
          declarations: [componentClass],
        }).compileComponents();

        compFixture = TestBed.createComponent(componentClass);
        compInstance = compFixture.componentInstance;
        compFixture.detectChanges();
      });

      it('should create the component', () => {
        expect(compInstance).toBeTruthy();
      });
    });
  });
});
