import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../hooks/useScrollToTop";
import "../css/crudbook.css";

const AddBook = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    isAvailable: true, // Default to 'Yes'
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleAvailabilityChange = (value) => {
    setFormData({
      ...formData,
      isAvailable: value === "true", // Convert string value back to boolean
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      bookTitle: formData.title, // Ensure it matches the entity field
      bookAuthor: formData.author,
      bookGenre: formData.genre,
      bookStatus: formData.isAvailable, // Boolean field for availability
    };

    try {
      const response = await fetch("http://localhost:8080/bookApi/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log("Book Created: ", data);

      navigate("/resources");
    } catch (error) {
      console.log("Error creating book: ", error.message);
    }
  };

  useScrollToTop();

  return (
    <section className="add-book">
      <Header current_page="Add a Book" setIsAuthenticated={setIsAuthenticated} />
      <div className="content">
        <div className="center-form">
          <h1>Post New Book</h1>
          <Form onSubmit={handleSubmit}>
            {/* Title */}
            <Form.Group controlId="formBookTitle">
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Title"
                value={formData.title}
                onChange={handleInputChange}
              />
            </Form.Group>

            {/* Author */}
            <Form.Group controlId="formBookAuthor">
              <Form.Control
                type="text"
                name="author"
                placeholder="Enter Author"
                value={formData.author}
                onChange={handleInputChange}
              />
            </Form.Group>

            {/* Genre */}
            <Form.Group controlId="formBookGenre">
              <Form.Control
                type="text"
                name="genre"
                placeholder="Enter Genre"
                value={formData.genre}
                onChange={handleInputChange}
              />
            </Form.Group>

            {/* Availability */}
            <Form.Group controlId="formBookAvailability">
              <Form.Label>Is the Book Available?</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="Yes"
                  name="availability"
                  value="true"
                  checked={formData.isAvailable === true}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="No"
                  name="availability"
                  value="false"
                  checked={formData.isAvailable === false}
                  onChange={(e) => handleAvailabilityChange(e.target.value)}
                  inline
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default AddBook;
