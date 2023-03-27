import React from "react";
import { useAppContext } from "./Context/appContext";

function Favourites() {
  const { favourites, removeFavourites } = useAppContext();
  // const favCheck = (id) =>{
  //   const boolean = favourites.some((book) => book.id ===id)
  //   return boolean
  // }
  return (
    <div className="favourites all">
      {favourites.length > 0 ? (
        favourites.map((book) => {
          return (
            <div key={book.id} className="books">
              <h3>{book.title}</h3>
              <img className="book-img" src={book.image_url} alt={book.title} />
              <br></br>

              <button onClick={() => removeFavourites(book.id)}>Remove </button>
            </div>
          );
        })
      ) : (
        <h1>You dont have any favourites</h1>
      )}
    </div>
  );
}

export default Favourites;
