/** @jsx jsx */
import { FC } from 'react'
import { css, jsx } from '@emotion/core'
import tokens from '../../tokens'

interface PantoneProps {
  color: string
  name?: string
}
const styles = {
  wrapper: css({
    width: 150,
    background: tokens.colors.white,

    border: `1px solid ${tokens.colors.gray3}`,
  }),
  color: css({
    height: 100,
    width: '100%',
  }),
  nameWrapper: css({
    textTransform: 'uppercase',
    padding: tokens.spacing.m,
  }),
  name: css({
    fontWeight: 'bold',
  }),
}

const Pantone: FC<PantoneProps> = ({ color, name }) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.color} style={{ backgroundColor: color }}></div>
      <div css={styles.nameWrapper}>
        <div css={styles.name}>{name || color}</div>
        {<div>{name ? color : '\xa0'}</div>}
      </div>
    </div>
  )
}

export default Pantone
