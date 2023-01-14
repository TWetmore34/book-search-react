import { useBookContext } from '../../context/ContextStore'
import Book from './Book';
import Loading from './Loading'
import Error from '../Error';
const BookList = () => {
  // map through books state - if null, render loading component
    let books = useBookContext()[0];
  return (
    <ul className='booklist'>
        {!books ? books === null ? <Loading /> : <Error /> : books?.map((book) => {
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