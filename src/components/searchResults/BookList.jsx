import { useBookContext } from '../../context/ContextStore'
import Book from './Book';
import Loading from './Loading'
const BookList = () => {
    let books = useBookContext()[0];
  return (
    <ul className='booklist'>
        {books === null ? <Loading /> : books?.map((book) => {
            return <Book
            key={book.id}
            id={book.id}
            author={book.volumeInfo.authors} 
            title={book.volumeInfo.title} 
            description={book.volumeInfo.description}
            imgSrc={book.volumeInfo?.imageLinks?.smallThumbnail}
            publisher={book.volumeInfo.publisher}
            publishDate={book.volumeInfo.publishedDate}/>
        })}
    </ul>
  )
}

export default BookList