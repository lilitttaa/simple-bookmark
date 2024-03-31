'use client'

import { useEffect, useState } from 'react'

type BookmarkItem = {
  id: string
  title: string
  url: string
}

const Home: React.FC = () => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const [bookmarkItem, setBookmarkItem] = useState([
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
  ] as BookmarkItem[])

  const addBookmark = () => {
    const newBookmarkItem = [...bookmarkItem]
    newBookmarkItem.push({
      id: String(bookmarkItem.length + 1),
      title,
      url
    })
    setBookmarkItem(newBookmarkItem)
  }
  const deleteBookmark = (id: string) => {
    const newBookmarkItem = bookmarkItem.filter(bookmark => bookmark.id !== id)
    setBookmarkItem(newBookmarkItem)
  }
  useEffect(() => {}, [])
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
            addBookmark()
            setTitle('')
            setUrl('')
          }}
        >
          Add
        </button>
      </div>
      <div className='BoomarkViewContainer'>
        <ul>
          {bookmarkItem.map(item => {
            return (
              <div className='BookmarkViewItem'>
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
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Home
