import React from "react";

const Book = ({ singleBook }) => {
  console.log(singleBook);
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    yearOfPublishing,
    publisher
  } = singleBook;

  return (
    <div className="p-4 border rounded-2xl shadow hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt={bookName}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <div className="flex justify-center gap-2">
        {tags.map((tag) => (
          <button>{tag}</button>
        ))}
      </div>
      <h2 className="text-xl font-semibold mb-1">{bookName}
      <div className="flex justify-center -mt-7">{yearOfPublishing}</div>
      </h2>
     <p className="text-green-500">publisher:  {publisher}</p>
      <p className="text-gray-600 mb-1">by {author}</p>
      <p className="text-sm text-blue-500 mb-2">Category: {category}</p>
      <div className="border-t-2 border-dashed p-1"></div>
      <div className="flex justify-between items-center">
      
        <span className="text-yellow-500 font-medium">⭐ {rating}</span>
        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Book;
