import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { expect, describe, it } from 'vitest'

import App from './App'
import { store } from './store/store'

describe('App Component', () => {
  // it('renders correctly', () => {
  //   const result = render(
  //     <Provider store={store}>
  //       <App />
  //     </Provider>,
  //   )

  //   expect(result).toMatchSnapshot()
  // })

  it('toggles dark mode correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    )

    const darkModeToggle = getByTestId('dark-mode-toggle')

    expect(darkModeToggle).toBeVisible()

    expect(document.documentElement).not.toHaveClass('dark')

    fireEvent.click(darkModeToggle)
    expect(document.documentElement).toHaveClass('dark')

    fireEvent.click(darkModeToggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })
})
