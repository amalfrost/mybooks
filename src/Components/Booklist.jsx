import React, { useState, useEffect } from "react";
import { useAppContext } from "./Context/appContext";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import BookSearch from './BookSearch';

function Booklist() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [search ,setSearch] = useState(true)

  const navigate = useNavigate();

  const { favourites, addToFavourites, removeFavourites } = useAppContext();
  const favCheck = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };
  /*
TODO: Add a search functionality DONE: 
TODO: Add functionality to increase book lists
TODO: Add a TO-top button
TODO: Integrate firebase and add a storage for favourites


TODO: Anime app
*/

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=10")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
 

  return (
    <div className=" all">
    <div className="search">
          <input
            placeholder="search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" onClick={()=>setSearch(false)}>Search</button>
        </div>
    {
      search ?
      
      <div className="book-list">
        

        {books
          .filter(
            (book) =>
              book.title.toLowerCase().includes(query) ||
              book.authors.toLowerCase().includes(query)
          )
          .map((book) => {
            return (
              <div key={book.id} className="books">
                <img
                  className="book-img"
                  src={book.image_url}
                  alt={book.title}
                  onClick={() => navigate(`/books/${book.id}`)}
                />
                <h3>{book.title}</h3>
                <p>Author : {book.authors}</p>
                <br></br>
                {favCheck(book.id) ? (
                  <button onClick={() => removeFavourites(book.id)}>
                    Remove{" "}
                  </button>
                ) : (
                  <button onClick={() => addToFavourites(book)}>add </button>
                )}
              </div>
            );
          })}
      </div>
      : 
     <BookSearch search={query}/>
    }
    </div>
  );

}

export default Booklist;
