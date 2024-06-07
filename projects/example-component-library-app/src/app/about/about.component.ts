import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  currentRoute!: string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: any) => {
    //   this.currentRoute = event.urlAfterRedirects;
    // });

    this.router.events.subscribe((event: any)=>{
      console.log(event);
    })

    console.log(this.currentRoute);
  }

  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }

}
