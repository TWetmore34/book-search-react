export default function genBooksUrl (queryValue) {
    return `https://www.googleapis.com/books/v1/volumes?q=${queryValue.trim()}&startIndex=0&maxResults=20`
}