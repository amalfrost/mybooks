import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./Context/appContext";



import axios from "axios";

const BOOKS_URL = `https://example-data.draftbit.com/books?q=`;

function BookSearch({ search }) {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);
  const { favourites, addToFavourites, removeFavourites } = useAppContext();
  const favCheck = (id) => {
    const boolean = favourites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios

      .get(`${BOOKS_URL}${search}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [search]);

  return (
    <div className="book-search all">
      {books.map((item) => (
        <div className="new-search">
          <img
            src={item.image_url}
            alt = {item.title}
            onClick={() => navigate(`/books/${item.id}`)}
          />
          <h4>{item.title}</h4>
          <p>Author:  {item.authors}</p>
          <br></br>
                {favCheck(item.id) ? (
                  <button onClick={() => removeFavourites(item.id)}>
                    Remove{" "}
                  </button>
                ) : (
                  <button onClick={() => addToFavourites(item)}>add </button>
                )}
        </div>
      ))}
    </div>
  );
}

export default BookSearch;
