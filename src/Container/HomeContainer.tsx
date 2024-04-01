import { useEffect, useState } from 'react'
import { BookmarkViewContainer } from './BookmarkView'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addBookmark, selectBookmarks } from '../store/managerSlice'

const Home: React.FC = () => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const bookmarks = useAppSelector(selectBookmarks)
  const dispatch = useAppDispatch()

  return (
    <div className='HomeContainer'>
      <div className='AddBookmarkContainer'>
        <input
          type='text'
          placeholder='Title'
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
        <input
          type='text'
          placeholder='URL'
          onChange={e => setUrl(e.target.value)}
          value={url}
        />
        <button
          onClick={() => {
            dispatch(
              addBookmark({
                id: String(bookmarks.length + 1),
                title,
                url
              })
            )
            setUrl('')
            setTitle('')
          }}
        >
          Add
        </button>
      </div>
      <BookmarkViewContainer />
    </div>
  )
}

export default Home
