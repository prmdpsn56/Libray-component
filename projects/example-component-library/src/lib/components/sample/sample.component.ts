import { MatButtonModule } from '@angular/material/button';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-sample',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent {

  @Input() name!:string;

}
