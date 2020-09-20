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
