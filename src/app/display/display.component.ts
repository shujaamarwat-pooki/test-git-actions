import { Component, OnInit, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  componentData:
    | { name: string; selector: string; html: string; css: string; ts: string }
    | undefined;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  dynamicComponent: Type<any> | null = null;
  activeTab: 'html' | 'css' | 'ts' = 'html';
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const componentName = params['name'];
      this.loadComponentFiles(componentName);
      this.loadDynamicComponent(componentName);
    });
  }

  loadComponentFiles(componentName: string) {
    const componentData = {
      name: componentName.charAt(0).toUpperCase() + componentName.slice(1),
      selector: `app-${componentName}`,
      html: '',
      css: '',
      ts: '',
    };
    this.http
      .get(`app/block/${componentName}/${componentName}.component.html`, {
        responseType: 'text',
      })
      .subscribe(
        (html) => (componentData.html = html),
        (error) => this.router.navigate(['/404'])
      );

    this.http
      .get(`app/block/${componentName}/${componentName}.component.scss`, {
        responseType: 'text',
      })
      .subscribe(
        (css) => (componentData.css = css),
        (error) => this.router.navigate(['/404'])
      );

    this.http
      .get(`app/block/${componentName}/${componentName}.component.ts`, {
        responseType: 'text',
      })
      .subscribe(
        (ts) => {
          componentData.ts = ts;
          this.componentData = componentData;
        },
        (error) => this.router.navigate(['/404'])
      );
  }

  loadDynamicComponent(componentName: string) {
    import(`../block/${componentName}/${componentName}.component`)
      .then((module) => {
        const pascalCaseName = this.toPascalCase(componentName);
        const componentClass = module[`${pascalCaseName}Component`];
        if (componentClass) {
          this.dynamicComponent = componentClass;
        } else {
          this.router.navigate(['/404']);
        }
      })
      .catch((error) => {
        console.error(`Error loading component ${componentName}:`, error);
        this.router.navigate(['/404']);
      });
  }

  toPascalCase(name: string): string {
    return name
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('');
  }

  capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  copyCode(code: string, codeType: string) {
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert(`${codeType} code copied to clipboard!`);
  }
}
