import renderer from 'react-test-renderer'
import { it, expect, afterEach } from '@jest/globals'
import { BookmarkViewContainer } from '../src/Container/BookmarkView'
import { cleanup, fireEvent, render } from '@testing-library/react'

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
  const { queryByLabelText, getByLabelText,getByText } = render(
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
  const deleteButton = getByText('Delete')
  fireEvent.click(deleteButton)
  expect(queryByLabelText('Google')).toBeNull()
})
