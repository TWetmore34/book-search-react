import { useState } from 'react'
import { useBookContext } from '../../context/ContextStore';
import useTrie from '../../hooks/autocomplete/useTrie';
import { getBooks, loadBooks } from '../../context/actionCreators';

const QueryForm = () => {
  // creates trie from hooks/autocomplete/trie.json for autocomplete suggestions
  const [trie] = useTrie();
  // houses an array of suggestions that are mapped through to return <option /> tags
  const [suggestions, setSuggestions] = useState([]);
  // dispatcher function
  const setBooks = useBookContext()[1];
  // controlled form component
  let [queryValue, setQueryValue] = useState("");

  // handleChange sets suggestions based on the trie autocomplete function (results limited to 5)
  // then sets query value
  const handleChange = (e) => {
    setSuggestions(trie.autoComplete(e.target.value).slice(0,5))
    setQueryValue(e.target.value)
  }

  const handleSubmit = async () => {
    // generate books/loading for the <Loading /> component to render and expands trie for future searches (NOTE: currently does not last past a page refresh - working on a fix)
    setBooks(loadBooks());
    trie.insert(queryValue);
    try {
      // fetch request sent to reducer function updates state
      let url = `https://www.googleapis.com/books/v1/volumes?q=${queryValue}&startIndex=0&maxResults=20`
      let req = await fetch(url);
      let data = await req.json();
      setBooks(getBooks(data.items));

    } catch (err) {
      throw new Error(err)
    }
    // reset form value
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