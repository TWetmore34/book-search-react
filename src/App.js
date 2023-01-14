import './App.css';
import ContextStoreProvider from "./context/ContextStore"
import BookList from './components/searchResults/BookList';
import QueryForm from './components/searchResults/QueryForm';
import Wishlist from './components/wishlist/Wishlist';
function App() {
  return (
    <ContextStoreProvider>
      <QueryForm />
      <div className='app__container'>
        <BookList />
        <Wishlist />
      </div>
    </ContextStoreProvider>
  );
}

export default App;
