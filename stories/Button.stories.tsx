import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,

  // Control repetition
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;
// Repeated Button

// export const Default = () => <Button variant="default">Default</Button>;
// export const Primary = () => <Button variant="primary">Primary </Button>;

// export const Secondary = () => <Button variant="secondary">Secondary</Button>;

// export const Success = () => <Button variant="success">Success</Button>;

// export const Warning = () => <Button variant="warning">Warning</Button>;

// export const Danger = () => <Button variant="danger">Danger</Button>;

// Control repetition & Control

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'I am Primary',
  // individual click
  onClick: action('Primary Clicked'),
};
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'I am Secondary',
  onClick: action('Secondary Clicked'),
};
export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'I am Success',
  onClick: action('Success Clicked'),
};
export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'I am Warning',
  onClick: action('Warning Clicked'),
};
export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'I am Danger',
  onClick: action('Danger Clicked'),
};
