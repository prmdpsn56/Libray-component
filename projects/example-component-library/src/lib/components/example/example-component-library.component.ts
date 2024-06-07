import { Component } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-example-component-library',
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>
      example-component-library works again!!!!
    </p>
    <a [routerLink]="['/about']" routerLinkActive="active">Route me</a>
  `,
  styles: `.active {
    font-weight: bold;
    color: green;
  }
  `
})
export class ExampleComponentLibraryComponent {
  constructor(private router: Router){}

  navigateMe(){
    this.router.navigate(['/about'],{queryParams:{name:'param',lastName:'singh'}})
  }

}
