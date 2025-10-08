import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [allbooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allbooks.length > 0 ? (
          allbooks.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))
        ) : (
          <p className="text-center">Loading books...</p>
        )}
      </div>
    </div>
  );
};

export default Books;
