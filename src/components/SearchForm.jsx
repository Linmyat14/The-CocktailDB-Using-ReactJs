import { useRef } from "react";
import { useGlobalContext } from "../context"

const SearchForm = () => {
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef('');

    const handleForm = (e) => {
      e.preventDefault();
    }

    const searchCocktail = () => {
      setSearchTerm(searchValue.current.value);
    }
  return (
    <div className="section">
     <form onSubmit={handleForm}>
      <div className="search-form">
        <label htmlFor="search" className="search-label">Search your favorite Cocktail</label>
        <input type="text" className="search-input" ref={searchValue} onChange={searchCocktail} />
      </div>
     </form>
    </div>
  )
}

export default SearchForm
