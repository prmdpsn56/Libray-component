# npm run run:storybook 
To run the storybook applicatoin

# npm run build:storybook
To build the library component (Mandatory to make library function) 

# npm start
To run the project

1. Create library project using the following guide: https://medium.com/@ashishmr272/the-beginners-guide-to-storybook-in-angular-16-testing-strategies-for-angular-libraries-495eb9df5b32
2.  After Creating this you can also create a regular project inside the main project folder and then then use the created library there.



Instruction for Material Icons.


1. Register the Icons using a service, in this case example component library service.
2. Host the SVG Icon under the root directory: follow these instructions:  https://stackoverflow.com/questions/57741052/include-assets-when-building-angular-library
3. when using in the application project, Instantiate the library-icon service as they are being used registered during constructor method:
constructor(private exampleComponentLibraryComponent:ExampleComponentLibraryService)

4. when using in the same libary but other commponent you can use as is.
5. you might also encounter an issue related to registering httpModule.
use the following https://angular.dev/guide/http/setup and register the provideHttpClient(),

6. Follow when encountering issues with story book implementation
https://github.com/storybookjs/storybook/issues/21942


Tutorials:
https://github.com/profanis/codeShotsWithProfanis

Video showing the connection between library and the actual project using the library:
https://www.youtube.com/watch?v=hIEbJkP1M5E


https://www.willtaylor.blog/complete-guide-to-angular-libraries/


# ExampleComponentLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
