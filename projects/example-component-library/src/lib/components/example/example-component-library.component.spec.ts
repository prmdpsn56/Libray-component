import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponentLibraryComponent } from './example-component-library.component';

describe('ExampleComponentLibraryComponent', () => {
  let component: ExampleComponentLibraryComponent;
  let fixture: ComponentFixture<ExampleComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleComponentLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExampleComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
