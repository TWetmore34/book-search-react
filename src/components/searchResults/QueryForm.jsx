import { useState } from 'react'
import { useBookContext } from '../../context/ContextStore';
import useTrie from '../../hooks/autocomplete/useTrie';

const QueryForm = () => {
  const [trie] = useTrie();
  const [suggestions, setSuggestions] = useState([]);
  const setBooks = useBookContext()[1];
  let [queryValue, setQueryValue] = useState("");

  const handleChange = (e) => {
    setSuggestions(trie.autoComplete(e.target.value).slice(0,5))
    setQueryValue(e.target.value)
  }

  const handleSubmit = async () => {
    setBooks({type: "books/loading"})
    let url = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}&startIndex=0&maxResults=20`
    let req = await fetch(url);
    let data = await req.json();
    setBooks({type: "books/getAll", payload: data.items});
    setQueryValue("");
  }
  return (
    <>
      <form>
      <div>Choose a browser from this list:</div>
      <input list="query" onChange={(e) => handleChange(e)} />
      <datalist id="query">
        {suggestions?.map((s, idx) => <option key={idx} value={s}/>
        )}
      </datalist>
        <button className='btn--submit' onClick={(e) => {
          e.preventDefault()
          handleSubmit()}}>Submit</button>
      </form>
    </>
  )
}

export default QueryForm