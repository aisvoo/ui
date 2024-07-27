import React from 'react'
import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "@aisvoo/ui/button" 
import "@aisvoo/ui/styles.css"

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["primary"],
    },
    size: {
      control: { type: "radio" },
      options: ['sm','md','lg'],
    },
    variant: {
      control: { type: "radio" },
      options: ["solid", "outline"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    iconOnly: {
      control: { type: "boolean" },
    },
  },
  
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Button
      {...props}
    >
      {props.children}
    </Button>
  ),
  name: "Button",
  args: {
    children: "Hello",
    color: "primary",
    size: "md",
    variant: "solid",
    disabled: false,
    loading: false,
    iconOnly: false
  },
};
