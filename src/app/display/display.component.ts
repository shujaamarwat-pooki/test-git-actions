import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  components: { name: string; selector: string; html: string; css: string; ts: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadComponentFiles();
  }

  loadComponentFiles() {
    const componentNames = ['button', 'button-image']; 

    componentNames.forEach(component => {
      const componentData = {
        name: component.charAt(0).toUpperCase() + component.slice(1),
        selector: `app-${component}`,
        html: '',
        css: '',
        ts: ''
      };

      this.http.get(`app/block/${component}/${component}.component.html`, { responseType: 'text' })
        .subscribe(
          html => {
            console.log('HTML loaded:', html);
            componentData.html = html;
          },
          error => console.error(`Error loading ${component}.component.html:`, error)
        );

      this.http.get(`app/block/${component}/${component}.component.scss`, { responseType: 'text' })
        .subscribe(
          css => {
            console.log('CSS loaded:', css);
            componentData.css = css;
          },
          error => console.error(`Error loading ${component}.component.scss:`, error)
        );

      this.http.get(`app/block/${component}/${component}.component.ts`, { responseType: 'text' })
        .subscribe(
          ts => {
            console.log('TypeScript loaded:', ts);
            componentData.ts = ts;
            this.components.push(componentData);
          },
          error => console.error(`Error loading ${component}.component.ts:`, error)
        );
    });
  }
}
