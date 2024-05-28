import { applicationConfig, moduleMetadata, type Preview } from "@storybook/angular";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { importProvidersFrom } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
setCompodocJson(docJson);

const preview: Preview = {
  decorators:[
    applicationConfig({
      providers: [importProvidersFrom(HttpClientModule)]
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
