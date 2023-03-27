import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

const BOOKS_URL = `https://example-data.draftbit.com/books/`;

function BookDetails() {
  const { id } = useParams();
  const [books, setBooks] = useState();

  useEffect(() => {
    axios
      .get(`${BOOKS_URL}${id}`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  console.log(books?.title);
  return (
    <div className="book-details all">
       <div>
       <h2>{books?.title}</h2>
      <img src={books?.image_url} alt= "Books " />
      <h3> Author : {books?.authors}</h3>
      <p>{books?.description}</p>
      <br/>
      <p>Quotes :  <em>{books?.Quote1}</em> </p>
      
       </div>
    </div>
  );
}

export default BookDetails;
