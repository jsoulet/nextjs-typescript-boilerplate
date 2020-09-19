/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import tokens from '../tokens'
export interface HeadingProps {
  // eslint-disable-next-line no-undef
  as?: keyof JSX.IntrinsicElements
}

// const styles =css({ letterSpacing: '-1px' })

const Heading: React.FC<HeadingProps> = ({ as: As = 'div', children, ...props }) => {
  return (
    <As css={{ color: tokens.colors.black }} {...props}>
      {children}
    </As>
  )
}

export default Heading
