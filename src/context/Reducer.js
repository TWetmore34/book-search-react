import { actions } from "./Actions";
export default function reducer(state, action) {
    switch(action.type) {
        case actions.getBooks:
            // returning action.payload clears old statemaking sure view only renders the new query
            return action.payload

        case actions.loadBooks:
            // sets state to null while fetch request works
            return null

        case actions.bookError:
            return undefined
            
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
            // filter state to remove id included in action.payload
            let filteredState = state.filter(book => {
                return book.id !== action.payload
            })
            // save updated wishlist to localstorage
            window.localStorage.setItem("wishlist", JSON.stringify(filteredState))
            return filteredState;

        default:
            // default case just keeps state as is to prevent errors
            return state
    }
}