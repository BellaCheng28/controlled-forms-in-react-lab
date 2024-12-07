import { useState } from "react";

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({ title: "", author: "" });


  //handle input value
  const handleInputChange = (event) => {
    setNewBook({ ...newBook, [event.target.name]: event.target.value });
  } 
  


const handleSubmit = (event)=>{
  event.preventDefault();
  setBooks((prevBooks)=>[...prevBooks,newBook])
  setNewBook({ title: "", author: "" });

}

return (
  <>
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="title"
                placeholder="Enter the book title"
                value={newBook.title}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label htmlFor="author">Author</label>
              <input
                id="author"
                name="author"
                placeholder="Enter the author's name"
                value={newBook.author}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        
      </div>
      <div className="bookCardsDiv">
          <ul>
            <h1>book card</h1>
            {books.map((book, index) => (
              <li key={book.id || index}>
                <div>Title:{book.title}</div>
                <div>Author: {book.author}</div>
              </li>
            ))}
          </ul>
        
      </div>
    </div>
  </>
);



}




export default Bookshelf;







