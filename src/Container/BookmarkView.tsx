import { useAppDispatch, useAppSelector } from '../store/hooks'
import { deleteBookmark, selectBookmarks } from '../store/managerSlice'

export function BookmarkViewContainer () {
  const bookmarks = useAppSelector(selectBookmarks)
  const dispatch = useAppDispatch()
  return (
    <div className='BoomarkViewContainer'>
      <ul>
        {bookmarks.map(bookmark => (
          <div className='BookmarkViewItem' key={bookmark.id}>
            <li
              key={bookmark.id}
              style={{
                display: 'inline'
              }}
            >
              <a href={bookmark.url}>{bookmark.title}</a>
            </li>

            <button
              onClick={() => {
                dispatch(deleteBookmark(bookmark.id))
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
