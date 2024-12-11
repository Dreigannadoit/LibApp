import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

import "../css/crudbook.css";
import Header from '../components/Header';

const UpdateBook = ({ setIsAuthenticated }) => {
    const { id } = useParams();
    const navigate = useNavigate();

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

    const handleAvailabilityChange = (value) => {
        setFormData({
            ...formData,
            isAvailable: value === "true", // Convert string value to boolean
        });
    };

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/book/${id}`);
                const data = await response.json();

                console.log("Fetched Data:", data); // Debugging log

                // Map the API response correctly to the state
                setFormData({
                    title: data.title || "",
                    author: data.author || "",
                    genre: data.genre || "",
                    isAvailable: data.available || false, // Assuming `available` is the API field
                });
            } catch (error) {
                console.log("Error fetching book:", error.message);
            }
        };

        fetchBook();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Transform the data to match the backend expectations
        const payload = {
            ...formData,
            available: formData.isAvailable, // Map `isAvailable` to `available`
        };
        delete payload.isAvailable; // Remove `isAvailable` to avoid confusion

        console.log(payload);

        try {
            const response = await fetch(`http://localhost:8080/api/book/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload), // Send the transformed payload
            });

            const data = await response.json();
            console.log("Book Updated: ", data);

            navigate("/resources");
        } catch (error) {
            console.log("Error updating book: ", error.message);
        }
    };

    return (
        <section className="update-book">
            <Header current_page="Edit a Book" setIsAuthenticated={setIsAuthenticated}/>

            <div className="content">
                <div className="center-form">
                    <h1>Edit Book Data</h1>
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

export default UpdateBook;
