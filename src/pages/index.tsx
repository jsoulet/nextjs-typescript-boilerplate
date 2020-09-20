import React from 'react'
import Heading from 'src/components/Heading'
import Text from 'src/components/Text'

export default function Home() {
  return (
    <>
      <Heading>🦦 Welcome</Heading>
      <Text>
        As every boilerplate, this one has been created to avoid re-doing the same stuff for every
        new project
        <ul>
          <li>Setup TypeScript</li>
          <li>Configure Eslint and Prettier</li>
          <li>Install Jest and Testing Library</li>
          <li>Create a Storybook</li>
          <li>...</li>
        </ul>
        It has been setup with librairies I like to work with, and feel free to fork it to add your
        own favorite tools.
      </Text>
    </>
  )
}
