import renderer from 'react-test-renderer'
import { it, expect, afterEach } from '@jest/globals'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { BookmarkViewContainer } from './BookmarkView'

afterEach(cleanup)

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BookmarkViewContainer
        bookmarkItems={[
          {
            id: '1',
            title: 'Google',
            url: 'https://www.google.com'
          },
          {
            id: '2',
            title: 'Yahoo',
            url: 'https://www.yahoo.com'
          }
        ]}
        deleteBookmark={() => {}}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('click delete button', () => {
  render(
    <BookmarkViewContainer
      bookmarkItems={[
        {
          id: '1',
          title: 'Google',
          url: 'https://www.google.com'
        }
      ]}
      deleteBookmark={() => {}}
    />
  )
  const deleteButton = screen.getByText('Delete')
  fireEvent.click(deleteButton)
  expect(screen.queryByLabelText('Google')).toBeNull()
})
