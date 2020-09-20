import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from './index'

export default {
  title: 'Core/Heading',
  component: Heading,
} as Meta

const Template: Story<HeadingProps> = (args) => <Heading {...args} />

export const Main = Template.bind({})
Main.args = {
  level: 1,
  children: `You may say that I'm a dreamer, but I'm not the only one`,
}

export const Heading1 = () => <Heading level={1}>Imagine there's no heaven</Heading>
export const Heading2 = () => <Heading level={2}>It's easy if you try</Heading>
export const Heading3 = () => <Heading level={3}>No hell below us</Heading>
export const Heading4 = () => <Heading level={4}>Above us only sky</Heading>
