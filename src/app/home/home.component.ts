import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { blocks } from '../shared/blocks';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  folders: string[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.folders = blocks.map((block) => block.name);
  }

  goToComponent(folderName: string) {
    this.router.navigate([`/block/${folderName}`]);
  }
}
