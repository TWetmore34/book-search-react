import { createContext, useContext } from "react";
import {  useReducer } from "react";
import reducer from "./Reducer";
// create context
const BookContext = createContext();
const WishlistContext = createContext();

// exports useContext as custom hooks to save a line importing both useContext and the specific context
export function useBookContext() {
    return useContext(BookContext)
}

export function useWishlistContext() {
    return useContext(WishlistContext)
}

export default function ContextStoreProvider({children}) {
  // bookState defaults to [] because no search has been made
    const [ bookState, dispatchBooks ] = useReducer(reducer, []);
    // wishlist defaults to localstorage || [] to save search results between sessions
    const [ wishlistState, dispatchWishlist ] = useReducer(reducer, JSON.parse(window.localStorage.getItem("wishlist")) || []);
  return (
    <BookContext.Provider value={[bookState, dispatchBooks]}>
        <WishlistContext.Provider value={[wishlistState, dispatchWishlist]}>
        {children}
        </WishlistContext.Provider>
    </BookContext.Provider>
  )
}

