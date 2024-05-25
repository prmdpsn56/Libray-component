import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  //this will define the path for a particular story; ex: like a menu.
  title: 'Example/anotherone/Button',
  // the current component that we need to render in the story book.
  component: ButtonComponent,
  // this will create a documentation page that will have the entier component, and its stories listed down below.
  tags: ['autodocs'],
  // this defines the list of standard arguments that will be  displayed on the stories documentation page.
  argTypes: {
    size: {
      control:'select',
      options: ['tiny', 'small', 'medium', 'large']
    },
    backgroundColor: {
      control: 'color',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClickOutputEvent: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const PrimaryStory: Story = {
  args: {
    primary: true,
    label: 'This is button label',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
