import {Meta, StoryObj} from '@storybook/angular';
import {SampleComponent} from './sample.component';

const meta: Meta<SampleComponent> = {
    title: 'sample/samplecomponent',
    component: SampleComponent,
    tags: ['autodocs'],
    parameters: {
      // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    //   layout: 'fullscreen',
    },
    argTypes: {
        name:{
            control: 'text'
        }
    }
  };

  export default meta;
type Story = StoryObj<SampleComponent>;

export const PrimaryStory: Story = {
    args: {
        name: 'This is button label',
    },
  };