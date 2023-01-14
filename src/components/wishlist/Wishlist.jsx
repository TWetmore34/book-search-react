import WishlistBook from "./WishlistBook"
import { useWishlistContext } from "../../context/ContextStore";
const Wishlist = () => {
    // wishlist context is mapped with WishlistBook as return
    let [wishList] = useWishlistContext();
  return (
    <div className="wishlist__container">
        <p className="text--bold">My Wishlist ({wishList.length})</p>
        <ul className="wishlist">
            {
                wishList.map(({title, id}) => {
                    return <WishlistBook title={title} id={id} key={id} />
                })
            }
        </ul>
    </div>
  )
}

export default Wishlist