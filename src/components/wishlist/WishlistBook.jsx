import { useWishlistContext, useBookContext } from "../../context/ContextStore"
import { getBooks, loadBooks, bookErrorMsg, deleteWishlist } from "../../context/actionCreators";
import genBooksUrl from "../../helpers/genBooksUrl";

const WishlistBook = ({title, id}) => {
    let setWishlist = useWishlistContext()[1];
    let setBooks = useBookContext()[1]
    // onClick, call dispatch function to delete by id
    const handleDelete = () => {
        setWishlist(deleteWishlist(id))
    }
    const handleSearchClick = async () => {
      setBooks(loadBooks())
      try {
        let url = genBooksUrl(title)
        let req = await fetch(url);
        let data = await req.json();
        setBooks(getBooks(data.items));
      } catch (err) {
        setBooks(bookErrorMsg())
        throw new Error(err)
      }
    }
  return (
    <li onClick={handleSearchClick} className="wishlist--item__container">
        <p>
        {title}
        </p>
        <button className="btn--delete" onClick={(e) => {
          e.stopPropagation()
          handleDelete()}}>Delete</button>
    </li>
  )
}

export default WishlistBook