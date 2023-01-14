import { useWishlistContext } from "../../context/ContextStore"
import { deleteWishlist } from "../../context/actionCreators";
const WishlistBook = ({title, id}) => {
    let setWishlist = useWishlistContext()[1];
    // onClick, call dispatch function to delete by id
    const handleDelete = () => {
        setWishlist(deleteWishlist(id))
    }
  return (
    <li className="wishlist--item__container">
        <p>
        {title}
        </p>
        <button className="btn--delete" onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default WishlistBook