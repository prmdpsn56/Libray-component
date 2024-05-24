import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponentLibraryComponent, SampleComponent } from '../../../example-component-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExampleComponentLibraryComponent, SampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-component-library-app';
}
