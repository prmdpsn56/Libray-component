import { ExampleComponentLibraryService } from 'example-component-library';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sample',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {

  @Input() name!:string;
  
  constructor(private ExampleComponentLibraryService:ExampleComponentLibraryService){

  }

}
