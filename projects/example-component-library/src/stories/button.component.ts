import { ExampleComponentLibraryService } from './../lib/components/example/example-component-library.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ButtonMessage {
  message: string
}

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule,MatButtonModule,MatIconModule],
  template: `
  <button  type="button"
    (click)="onClickOutputEvent.emit({message:'hello! this is a message from a button'})"
    [ngClass]="classes"
    [ngStyle]="{ 'background-color': backgroundColor }" mat-button color="primary">{{label}}
    <mat-icon svgIcon="phone"></mat-icon>
    </button>`,
  styleUrls: ['./button.css'],
})

export class ButtonComponent {

  constructor(private exampleComponentLibraryService:ExampleComponentLibraryService){

  }
  
  /**
   * Is this the principal call to action on the page?
   */
  @Input()
  primary = false;

  /**
   * What background color to use
   */
  @Input()
  backgroundColor?: string;

  /**
   * How large should the button be?
   */
  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = 'Button';

  /**
   * Optional click handler
   */
  @Output()
  onClickOutputEvent = new EventEmitter<ButtonMessage>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
}
