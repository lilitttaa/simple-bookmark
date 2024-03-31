import { useEffect, useState } from 'react'
import { BookmarkViewContainer } from './BookmarkView'

export type BookmarkItem = {
	id: string
	title: string
	url: string
  }
  const Home: React.FC = () => {
	const [title, setTitle] = useState('')
	const [url, setUrl] = useState('')
  
	const [bookmarkItems, setBookmarkItems] = useState([
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
	  const newBookmarkItem = [...bookmarkItems]
	  newBookmarkItem.push({
		id: String(bookmarkItems.length + 1),
		title,
		url
	  })
	  setBookmarkItems(newBookmarkItem)
	}
	const deleteBookmark = (id: string) => {
	  const newBookmarkItem = bookmarkItems.filter(bookmark => bookmark.id !== id)
	  setBookmarkItems(newBookmarkItem)
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
		<BookmarkViewContainer
		  bookmarkItems={bookmarkItems}
		  deleteBookmark={deleteBookmark}
		></BookmarkViewContainer>
	  </div>
	)
  }
  
  export default Home
  