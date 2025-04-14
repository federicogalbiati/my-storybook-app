import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;


const onClick = async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
  };

  
export const Primary: Story = {
  args: {
    label: 'Click me',
    onClick: onClick,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Click me',
    onClick: onClick,
    isdisabled: true,
  },
};
