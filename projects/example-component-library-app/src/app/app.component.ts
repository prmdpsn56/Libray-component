import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent, ExampleComponentLibraryComponent, HeaderComponent, SampleComponent } from 'example-component-library';

// Note:
// Here I am using the reference to the example-component-library, this reference is then defined in the tsconfig file, as shown below
// "paths": {
//   "example-component-library": [
//     "./dist/example-component-library"
//   ]
// }
// Earlier I was using the reference which pointed to the library component direclty. the correct and incorrect values are shown below

// Correct Referece
// import { ButtonComponent, ExampleComponentLibraryComponent, HeaderComponent, SampleComponent } from 'example-component-library';

// Incorrect Reference
// import { HeaderComponent } from '../../../example-component-library/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExampleComponentLibraryComponent, SampleComponent,ButtonComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'example-component-library-app';
}
