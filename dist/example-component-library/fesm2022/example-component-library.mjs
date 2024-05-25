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
  </button>
  <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>`, isInline: true, styles: [".storybook-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'storybook-button', standalone: true, imports: [CommonModule, MatButtonModule], template: ` <button
    type="button"
    (click)="onClickOutputEvent.emit($event)"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
    {{ label }}
  </button>
  <button mat-button color="primary">Primary</button>
    <button mat-button color="accent">Accent</button>
    <button mat-button color="warn">Warn</button>
    <button mat-button disabled>Disabled</button>`, styles: [".storybook-button{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:700;border:0;border-radius:3em;cursor:pointer;display:inline-block;line-height:1}.storybook-button--primary{color:#fff;background-color:#1ea7fd}.storybook-button--secondary{color:#333;background-color:transparent;box-shadow:#00000026 0 0 0 1px inset}.storybook-button--small{font-size:12px;padding:10px 16px}.storybook-button--medium{font-size:14px;padding:11px 20px}.storybook-button--large{font-size:16px;padding:12px 24px}\n"] }]
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

class HeaderComponent {
    constructor() {
        this.user = null;
        this.onLogin = new EventEmitter();
        this.onLogout = new EventEmitter();
        this.onCreateAccount = new EventEmitter();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: HeaderComponent, isStandalone: true, selector: "storybook-header", inputs: { user: "user" }, outputs: { onLogin: "onLogin", onLogout: "onLogout", onCreateAccount: "onCreateAccount" }, ngImport: i0, template: `<header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
            >!
          </span>
          <storybook-button
            *ngIf="user"
            size="small"
            (onClick)="onLogout.emit($event)"
            label="Log out"
          ></storybook-button>
        </div>
        <div *ngIf="!user">
          <storybook-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></storybook-button>
          <storybook-button
            *ngIf="!user"
            size="small"
            [primary]="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></storybook-button>
        </div>
      </div>
      <storybook-button [primary]="true" [backgroundColor]="'red'" [size]="'small'"/>
    </div>
    
  </header>`, isInline: true, styles: [".storybook-header{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-weight:700;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: ButtonComponent, selector: "storybook-button", inputs: ["primary", "backgroundColor", "size", "label"], outputs: ["onClickOutputEvent"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'storybook-header', standalone: true, imports: [CommonModule, ButtonComponent], template: `<header>
    <div class="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        <div *ngIf="user">
          <span class="welcome">
            Welcome, <b>{{ user.name }}</b
            >!
          </span>
          <storybook-button
            *ngIf="user"
            size="small"
            (onClick)="onLogout.emit($event)"
            label="Log out"
          ></storybook-button>
        </div>
        <div *ngIf="!user">
          <storybook-button
            *ngIf="!user"
            size="small"
            class="margin-left"
            (onClick)="onLogin.emit($event)"
            label="Log in"
          ></storybook-button>
          <storybook-button
            *ngIf="!user"
            size="small"
            [primary]="true"
            class="margin-left"
            (onClick)="onCreateAccount.emit($event)"
            label="Sign up"
          ></storybook-button>
        </div>
      </div>
      <storybook-button [primary]="true" [backgroundColor]="'red'" [size]="'small'"/>
    </div>
    
  </header>`, styles: [".storybook-header{font-family:Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif;border-bottom:1px solid rgba(0,0,0,.1);padding:15px 20px;display:flex;align-items:center;justify-content:space-between}.storybook-header svg{display:inline-block;vertical-align:top}.storybook-header h1{font-weight:700;font-size:20px;line-height:1;margin:6px 0 6px 10px;display:inline-block;vertical-align:top}.storybook-header button+button{margin-left:10px}.storybook-header .welcome{color:#333;font-size:14px;margin-right:10px}\n"] }]
        }], propDecorators: { user: [{
                type: Input
            }], onLogin: [{
                type: Output
            }], onLogout: [{
                type: Output
            }], onCreateAccount: [{
                type: Output
            }] } });

/*
 * Public API Surface of example-component-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonComponent, ExampleComponentLibraryComponent, ExampleComponentLibraryService, HeaderComponent, SampleComponent };
//# sourceMappingURL=example-component-library.mjs.map
