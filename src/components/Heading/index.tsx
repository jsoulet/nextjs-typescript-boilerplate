/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import tokens from '../tokens'
import Text from '../Text/'
export interface HeadingProps {
  level?: 1 | 2 | 3 | 4
}
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'
const HeadingSize = {
  h1: tokens.font.size.xxl,
  h2: tokens.font.size.xl,
  h3: tokens.font.size.l,
  h4: tokens.font.size.m,
}

// const styles =css({ letterSpacing: '-1px' })

const Heading: React.FC<HeadingProps> = ({ level = 1, children, ...props }) => {
  const H = `h${level}` as HeadingTag
  return (
    <Text
      as={H}
      css={{ letterSpacing: '-1px', fontSize: HeadingSize[H], fontWeight: 'bold' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Heading
