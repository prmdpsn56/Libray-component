import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@Injectable({
  providedIn: 'root'
})
export class ExampleComponentLibraryService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) { 
    const svgIcon = `
    <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 13H16M18 8H10M18 16H16M10.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H10.2C9.07989 4 8.51984 4 8.09202 4.21799C7.71569 4.40973 7.40973 4.71569 7.21799 5.09202C7 5.51984 7 6.07989 7 7.2V16.8C7 17.9201 7 18.4802 7.21799 18.908C7.40973 19.2843 7.71569 19.5903 8.09202 19.782C8.51984 20 9.07989 20 10.2 20ZM13 14.5C13 15.3284 12.3284 16 11.5 16C10.6716 16 10 15.3284 10 14.5C10 13.6716 10.6716 13 11.5 13C12.3284 13 13 13.6716 13 14.5ZM5 20C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6V18C7 19.1046 6.10457 20 5 20Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    this.matIconRegistry.addSvgIconLiteral('phone', this.domSanitizer.bypassSecurityTrustHtml(svgIcon));
    console.log("hello I am from example service component")
  
  }
}