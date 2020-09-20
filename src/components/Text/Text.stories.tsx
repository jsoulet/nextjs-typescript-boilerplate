import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Text, { TextProps } from './index'

export default {
  title: 'Core/Text',
  component: Text,
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Main = Template.bind({})
Main.args = {
  as: 'div',
  children: `You may say that I'm a dreamer, but I'm not the only one`,
}
