import React, { useState } from "react";
import "../css/members.css";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import { userStats } from "../constants";

const Members = ({ setIsAuthenticated }) => {
  const membersPerPage = 10; // Number of members to show per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input

  // Filter members based on the search term
  const filteredMembers = userStats.filter((user) =>
    user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.id.includes(searchTerm) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.book_borrowed.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.previous_book_borrowed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);

  // Get members for the current page
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = filteredMembers.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="members">
      <Header current_page="Members" setIsAuthenticated={setIsAuthenticated}/>

      <div className="content">
        <div className="content_container">
          <div className="sort_tools">
            <div className="searchbox">
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters">
              <div className="addNew">
                <NavLink>Add New Member</NavLink>
              </div>
            </div>
          </div>

          <div className="user_stats">
            <table>
              <thead>
                <tr>
                  <th>USER</th>
                  <th>ID No.</th>
                  <th>Status</th>
                  <th>Book Borrowed</th>
                  <th>Book Overdue</th>
                  <th>Previous Book Borrowed</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.length > 0 ? (
                  currentMembers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.userName}</td>
                      <td>{user.id}</td>
                      <td>{user.status}</td>
                      <td>{user.book_borrowed}</td>
                      <td>{user.book_overdue}</td>
                      <td>{user.previous_book_borrowed}</td>
                      <td className="crud_controlls">
                        <NavLink to="">Edit</NavLink>
                        <button>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No matching records found</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={currentPage === index + 1 ? "active" : ""}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Members;
