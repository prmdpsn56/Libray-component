import * as i0 from '@angular/core';
import { Injectable, Component, Input } from '@angular/core';

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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: SampleComponent, isStandalone: true, selector: "lib-sample", inputs: { name: "name" }, ngImport: i0, template: "<p>sample works!</p>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: SampleComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-sample', standalone: true, imports: [], template: "<p>sample works!</p>\n{{name}}\n", styles: ["p{border:1px solid red;padding:10px}\n"] }]
        }], propDecorators: { name: [{
                type: Input
            }] } });

/*
 * Public API Surface of example-component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExampleComponentLibraryComponent, ExampleComponentLibraryService, SampleComponent };
//# sourceMappingURL=example-component-library.mjs.map
