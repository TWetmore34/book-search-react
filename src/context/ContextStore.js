import { createContext, useContext } from "react";
import {  useReducer } from "react";
import reducer from "./Reducer";
const BookContext = createContext();
const WishlistContext = createContext();
export function useBookContext() {
    return useContext(BookContext)
}

export function useWishlistContext() {
    return useContext(WishlistContext)
}

export default function ContextStoreProvider({children}) {
    const [ bookState, dispatchBooks ] = useReducer(reducer, []);
    const [ wishlistState, dispatchWishlist ] = useReducer(reducer, JSON.parse(window.localStorage.getItem("wishlist")) || []);
  return (
    <BookContext.Provider value={[bookState, dispatchBooks]}>
        <WishlistContext.Provider value={[wishlistState, dispatchWishlist]}>
        {children}
        </WishlistContext.Provider>
    </BookContext.Provider>
  )
}

