import { BookmarkItem } from './HomeContainer'

export function BookmarkViewContainer ({
  bookmarkItems,
  deleteBookmark
}: {
  bookmarkItems: BookmarkItem[]
  deleteBookmark: (id: string) => void
}) {
  return (
    <div className='BoomarkViewContainer'>
      <ul>
        {bookmarkItems.map(item => (
          <div className='BookmarkViewItem' key={item.id}>
            <li
              key={item.id}
              style={{
                display: 'inline'
              }}
            >
              <a href={item.url}>{item.title}</a>
            </li>

            <button
              onClick={() => {
                deleteBookmark(item.id)
              }}
              style={{
                display: 'inline'
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  )
}
