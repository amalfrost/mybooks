import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Appcontext not defined ");
  }
  return context;
};

const AppcontextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (book) => {
    // const oldFavs = [...favourites];
    // const newFavs = favourites.push(book)
    setFavourites([...favourites,book])
    // console.log(book);
  };
  const removeFavourites = (id) => {
    const newFavs = [...favourites].filter((book) => book.id !== id)
    setFavourites(newFavs)
  };
  return (
    <AppContext.Provider
    value={{ favourites, addToFavourites, removeFavourites }}
  >
    {children}
  </AppContext.Provider>
  )
};

export default AppcontextProvider;
