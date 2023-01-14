import { actions } from "./Actions";
export default function reducer(state, action) {
    switch(action.type) {
        case actions.getBooks:
            return action.payload

        case actions.loadBooks:
            return null

        case actions.addWishlist:
            // check for repeats while rereating state
            let repeat = false;
            let newState = state.map(book => {
                if(book.id === action.payload.id) repeat = true;
                return book
            })
            // if no repeats, add to newState
            if(!repeat) {
                newState.push(action.payload)
            }
            // set in local storage to save without auth from backend
            window.localStorage.setItem("wishlist", JSON.stringify(newState))
            return newState;

        case actions.deleteWishlist:
            let filteredState = state.filter(book => {
                return book.id !== action.payload
            })
            window.localStorage.setItem("wishlist", JSON.stringify(filteredState))
            return filteredState;

        default:
            return state
    }
}