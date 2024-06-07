import { ExampleComponentLibraryService } from './../example/example-component-library.service';
// import { ExampleComponentLibraryService } from 'example-component-library';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

type Test2 = 'name' | 'age' | 'class';

export interface Test {
[key: string] : number
}

type Type3 = Record<Test2,string>;


@Component({
  selector: 'lib-sample',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,RouterModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {

  @Input() name!:string;

  testVariable:Type3 = {
    name: '2',
    age:'2',
    class: ''
  }
  
  
  constructor(private ExampleComponentLibraryService:ExampleComponentLibraryService){

  }

}
