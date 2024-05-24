import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Output } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';

class ExampleComponentLibraryService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ExampleComponentLibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ExampleComponentLibraryService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ExampleComponentLibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ExampleComponentLibraryComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ExampleComponentLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: ExampleComponentLibraryComponent, isStandalone: true, selector: "lib-example-component-library", ngImport: i0, template: `
    <p>
      example-component-library works again!!!!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ExampleComponentLibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-example-component-library', standalone: true, imports: [], template: `
    <p>
      example-component-library works again!!!!
    </p>
  ` }]
        }] });

class SampleComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: SampleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: SampleComponent, isStandalone: true, selector: "lib-sample", inputs: { name: "name" }, ngImport: i0, template: "<button mat-raised-button color=\"accent\">Accent</button>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}html,body{height:100%}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: SampleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sample', standalone: true, imports: [MatButtonModule], template: "<button mat-raised-button color=\"accent\">Accent</button>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}html,body{height:100%}body{margin:0;font-family:Roboto,Helvetica Neue,sans-serif}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }] } });

class ButtonComponent {
    constructor() {
        /**
         * Is this the principal call to action on the page?
         */
        this.primary = false;
        /**
         * How large should the button be?
         */
        this.size = 'medium';
        /**
         * Button contents
         *
         * @required
         */
        this.label = 'Button';
        /**
         * Optional click handler
         */
        this.onClickOutputEvent = new EventEmitter();
    }
    get classes() {
        const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
        return ['storybook-button', `storybook-button--${this.size}`, mode];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: ButtonComponent, isStandalone: true, selector: "storybook-button", inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label" }, outputs: { onClickOutputEvent: "onClickOutputEvent" }, ngImport: i0, template: ` <button
    type="button"
    (click)="onClickOutputEvent.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`, isInline: true, styles: [".storybook-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'storybook-button', standalone: true, imports: [CommonModule], template: ` <button
    type="button"
    (click)="onClickOutputEvent.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>`, styles: [".storybook-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}\n"] }]
        }], propDecorators: { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], onClickOutputEvent: [{
                type: Output
            }] } });

/*
 * Public API Surface of example-component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ExampleComponentLibraryComponent, ExampleComponentLibraryService, SampleComponent };
//# sourceMappingURL=example-component-library.mjs.map
