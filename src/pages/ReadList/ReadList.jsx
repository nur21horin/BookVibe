import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/AddToDb";
import Book from "../Books/Book";
const ReadList = () => {
    const data=useLoaderData();
   // console.log(data);

   const [readList,setReaList]=useState([]);
    useEffect(()=>{
        const storedBookData=getStoredBook();
        const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id));
        const myReadList=data.filter(book=>ConvertedStoredBooks.includes(book.bookId));
        console.log(myReadList);
        setReaList(myReadList);
    },[])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read: {readList.length}</h2>
          {
            readList.map(b=><Book  className="w-full h-40 object-cover rounded-md mb-2" key={b.bookId} singleBook={b}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>My Wish List:{} </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
