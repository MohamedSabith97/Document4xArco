import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { DocumentServiceService } from '../document-service.service';

@Component({
  selector: 'mark-down-load',
  standalone: true,
  imports: [],
  templateUrl: './mark-down-load.component.html',
  styleUrl: './mark-down-load.component.scss',
})
export class MarkDownLoadComponent {
  constructor(private documentService: DocumentServiceService) {}

  ngOnInit(): void {
    debugger;
    this.documentService.onPageLoad.subscribe((x: any) => {
      this.assetsURL = x.URL;
        this.loadMarkdown(this.assetsURL);
    });
  }

  isDataLoaded:boolean =false;
  assetsURL: any;
  innerHTML: any;
  loadMarkdown(url: any) {
    this.documentService.loadMarkDown(url).subscribe(
      (markdownContent: any) => {
        this.innerHTML = marked.parse(markdownContent);
        this.isDataLoaded=true;
      },
      (error) => {
        console.error('Error fetching Markdown file:', error);
        this.isDataLoaded=false;
      }
    );
  }
}



