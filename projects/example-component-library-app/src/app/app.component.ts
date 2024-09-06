import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import { ButtonComponent, ExampleComponentLibraryComponent, ExampleComponentLibraryService, HeaderComponent, SampleComponent } from 'example-component-library';

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
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExampleComponentLibraryComponent, SampleComponent,ButtonComponent,HeaderComponent,HttpClientModule,MatIconModule,FormsModule, MatFormFieldModule, MatInputModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new ErrorStateMatcher();
  title = 'example-component-library-app';
  constructor(private exampleComponentLibraryComponent:ExampleComponentLibraryService){
  }
}
