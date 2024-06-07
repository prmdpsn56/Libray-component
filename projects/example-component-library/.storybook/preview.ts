import { applicationConfig, moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { provideRouter, RouterModule, Routes } from "@angular/router";
import { ExampleComponentLibraryComponent } from "../src/public-api";
setCompodocJson(docJson);

export const routes: Routes = [
  { path: 'about', component: ExampleComponentLibraryComponent },
];
const preview: Preview = {
  decorators:[
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule),provideRouter([])],
    }),
    moduleMetadata({
      imports:[]
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
