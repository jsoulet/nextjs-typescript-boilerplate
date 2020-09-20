import { render } from '@testing-library/react'
import { Main, Heading1, Heading2, Heading3, Heading4 } from './Heading.stories'

describe('Heading', () => {
  it('matches snapshot', () => {
    const { container } = render(<Main>{`You may say that I'm a dreamer`}</Main>)
    expect(container).toMatchSnapshot()
  })
  it(`renders H1 tag`, () => {
    const { container } = render(<Heading1 />)
    const tag = container.querySelector(`h1`)
    expect(tag).toHaveTextContent(`Imagine there's no heaven`)
  })
  it(`renders H2 tag`, () => {
    const { container } = render(<Heading2 />)
    const tag = container.querySelector(`h2`)
    expect(tag).toHaveTextContent(`It's easy if you try`)
  })
  it(`renders H3 tag`, () => {
    const { container } = render(<Heading3 />)
    const tag = container.querySelector(`h3`)
    expect(tag).toHaveTextContent(`No hell below us`)
  })
  it(`renders H3 tag`, () => {
    const { container } = render(<Heading4 />)
    const tag = container.querySelector(`h4`)
    expect(tag).toHaveTextContent(`Above us only sky`)
  })
})
