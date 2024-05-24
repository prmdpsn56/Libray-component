import { MatButtonModule } from '@angular/material/button';
import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class SampleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: SampleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: SampleComponent, isStandalone: true, selector: "lib-sample", inputs: { name: "name" }, ngImport: i0, template: "<button mat-raised-button color=\"accent\">Accent</button>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}html,body{height:100%}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: SampleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sample', standalone: true, imports: [MatButtonModule], template: "<button mat-raised-button color=\"accent\">Accent</button>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}html,body{height:100%}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2V4YW1wbGUtY29tcG9uZW50LWxpYnJhcnkvc3JjL2xpYi9jb21wb25lbnRzL3NhbXBsZS9zYW1wbGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZXhhbXBsZS1jb21wb25lbnQtbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvc2FtcGxlL3NhbXBsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVNqRCxNQUFNLE9BQU8sZUFBZTsrR0FBZixlQUFlO21HQUFmLGVBQWUsZ0dDVjVCLHdFQUVBLGdMRElZLGVBQWU7OzRGQUlkLGVBQWU7a0JBUDNCLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQzs4QkFNakIsSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNhbXBsZScsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2FtcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NhbXBsZS5jb21wb25lbnQuY3NzJ1xufSlcbmV4cG9ydCBjbGFzcyBTYW1wbGVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpIG5hbWUhOnN0cmluZztcblxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxue3tuYW1lfX1cbiJdfQ==