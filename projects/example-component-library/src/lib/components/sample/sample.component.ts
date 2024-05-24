import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {

  @Input() name!:string;

}
