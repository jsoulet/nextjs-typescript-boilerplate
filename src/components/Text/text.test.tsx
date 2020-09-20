import { render } from '@testing-library/react'
import { Main } from './Text.stories'

describe('Text', () => {
  it('matches snapshot', () => {
    const { container } = render(<Main>{`You may say that I'm a dreamer`}</Main>)
    expect(container).toMatchSnapshot()
  })
  it('renders children', () => {
    const { getByTestId, getByText } = render(
      <Main data-testid="text-id">{`But I'm not the only one`}</Main>
    )
    expect(getByTestId('text-id')).toBeVisible()
    expect(getByText(`But I'm not the only one`)).toBeVisible()
  })
})
