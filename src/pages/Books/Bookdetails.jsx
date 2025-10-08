import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/AddToDb";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id);
  const data = useLoaderData();
  //console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  console.log(singleBook);
  const {bookName,image}=singleBook;

  const markAsRead=(id)=>{

    addToStoredDB(id);
  }
  return <>
    <div className="mx-auto w-2/3">
    <img className="w-48" src={image} alt=""></img>
    <h1>{bookName}</h1>
    <button className="btn btn-accent m-2 " onClick={()=>markAsRead(id)}>Mark as Read</button>
    <button className="btn btn-info">Add to Wishlist</button>
    </div>
  </>
};

export default BookDetails;
