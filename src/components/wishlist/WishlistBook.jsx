import { useWishlistContext } from "../../context/ContextStore"
const WishlistBook = ({title, id}) => {
    let setWishlist = useWishlistContext()[1];
    const handleDelete = () => {
        setWishlist({type: "wishlist/delete", payload: id})
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