export function getBooks(payload) {
    return {type: "books/getAll", payload}
}

export function loadBooks() {
    return {type: "books/loading"}
}

export function bookErrorMsg() {
    return {type: "books/error"}
}

export function addWishlist(id, title) {
    return {type: "wishlist/add", payload: {id, title}}
}

export function deleteWishlist(payload) {
    return {type: 'wishlist/delete', payload}
}

