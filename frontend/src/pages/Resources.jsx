import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import "../css/resources.css";

const Resources = ({ setIsAuthenticated }) => {
  const [books, setBooks] = useState([]); // Correct
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/bookApi/books");
        const data = await response.json();
        console.log("Fetched data:", data); // Inspect this log
        setBooks(data);
      } catch (error) {
        console.error("Error Fetching books:", error.message);
      }
    };    

    fetchBooks();
  }, []);

  // Filter books based on the search query, genre, and availability
  const filteredBooks = Array.isArray(books)
  ? books.filter((book) => {
      const matchesSearch = book.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesGenre =
        selectedGenre === "" ||
        book.genre.toLowerCase() === selectedGenre.toLowerCase();
      const matchesAvailability =
        selectedAvailability === "" ||
        (selectedAvailability === "Available" && book.available) ||
        (selectedAvailability === "Unavailable" && !book.available);

      return matchesSearch && matchesGenre && matchesAvailability;
    })
  : [];

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:8080/bookApi/book/${bookId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
        console.log(`Book with ID ${bookId} was deleted. Skibidi`);
      }
    } catch (error) {
      console.log("Error deleting book:", error.message);
    }
  };

  const HandleUpdate = (bookId) => {
    navigate(`/resources/${bookId}`);
  }

  return (
    <section className="resources">
      <Header current_page="Resources" setIsAuthenticated={setIsAuthenticated}/>

      <div className="content">
        <div className="content_container">
          {/* Pass state and handlers as props to UserSortTools */}
          <UserSortTools
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            dataset={books}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
            selectedAvailability={selectedAvailability}
            setSelectedAvailability={setSelectedAvailability}
          />

          <div className="books_container">
            {filteredBooks.map((book, index) => (
              <div className="book_card" key={book.id || index}>
                <div className="img_container">
                  <LazyLoadImage
                    alt={`${book.title} cover`}
                    src="https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2" 
                  />
                </div>

                <div className="info">
                  <div
                    className={`availability ${book.available ? "true" : "false"
                      }`}
                  >
                    <div className="light"></div>
                    <p>{book.available ? "Available" : "Unavailable"}</p>
                  </div>

                  <h1>{book.title}</h1>
                  <h2>{book.author}</h2>
                  <p>#{book.id}</p>
                  <p>{book.genre}</p>

                  <div className="crud_controlls">
                    <button
                      className="editbtn"
                      onClick={() => HandleUpdate(book.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="deletebtn"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const UserSortTools = ({
  searchQuery,
  setSearchQuery,
  dataset,
  selectedGenre,
  setSelectedGenre,
  selectedAvailability,
  setSelectedAvailability,
}) => {
  // Extract unique genres from the dataset
  const genres = Array.from(new Set(dataset.map((data) => data.genre)));

  return (
    <div className="sort_tools">
      <div className="filters">
        <div className="searchbox">
          <h1>Search for Books</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by title"
          />
        </div>

        <div className="dropdown">
          <h1>Pick A Genre</h1>
          <select
            className="modern-dropdown"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option value={genre} key={index}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown">
          <h1>Check Availability</h1>
          <select
            className="modern-dropdown"
            value={selectedAvailability}
            onChange={(e) => setSelectedAvailability(e.target.value)}
          >
            <option value="">All Availability</option>
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
          </select>
        </div>
      </div>

      <div className="addNew">
        <NavLink to="/addbook">Add Book</NavLink>
      </div>
    </div>
  );
};

export default Resources;


// react-router dom, chartjs, and npm i react-lazy-load-image-component, and  npm i lodash.debounce   