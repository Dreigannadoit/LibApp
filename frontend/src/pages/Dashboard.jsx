import "../css/dashboard.css";
import Header from '../components/Header';
import Status from '../components/status';
import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarController, BarElement } from "chart.js";
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { borrowRateThisWeek, sum } from "../constants";
import { avatar, borrow, borrowedBooks, overdue } from "../assets/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  BarController
);

const Dashboard = ({ setIsAuthenticated }) => {
  // State for statuses
  const [totalBooksAvailable, setTotalBooksAvailable] = useState(0);

  const [statusData, setStatusData] = useState({
    borrowedBooksThisWeek: 45, // Example data
    totalOverdueBooks: 10, // Example data
    registeredMembers: 230, // Example data
  });

  const [books, setBooks] = useState([]); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/bookApi/toprated");
        const data = await response.json();
        console.log("Fetched data:", data); // Inspect this log
        setBooks(data);
      } catch (error) {
        console.error("Error Fetching books:", error.message);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchTotalBooksAvailable = async () => {
      try {
        const response = await fetch("http://localhost:8080/bookApi/availableBooksCount");
        const data = await response.json();
        console.log("Fetched total available books count:", data);
        setTotalBooksAvailable(data); // Set the count directly
      } catch (error) {
        console.error("Error Fetching total available books:", error.message);
      }
    };

    fetchTotalBooksAvailable();
  }, []);

  return (

    <section className='dashoard'>

      <Header current_page="Dashboard" setIsAuthenticated={setIsAuthenticated} />

      <div className="content">
        <div className="content_container">
          <div className="hero">
            <div className="status_blocks">
              <Status title="Total Books Available" status={totalBooksAvailable} imgurl={borrowedBooks} />
              <Status title="Borrowed Books" status={statusData.borrowedBooksThisWeek} imgurl={borrow} />
              <Status title="Overdue" status={statusData.totalOverdueBooks} imgurl={overdue} />
              <Status title="Members" status={statusData.registeredMembers} imgurl={avatar} />
            </div>

          </div>

          <div className="graphs">
            <BorrowRate />
            <TotalGenre />
          </div>

          <div className="toprated">
            <h1>Top Rated Book</h1>
            <div>
              {books.slice(0, 3).map((book, index) => (
                <div className="book_card" key={book.id || index}>
                  <div className="img_container">
                    <LazyLoadImage
                      alt={`${book.title} cover`}
                      src="https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2"
                    />
                  </div>

                  <div className="info">

                    <p>{book.rating}/5</p>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                    <p>#{book.id}</p>
                    <p>{book.genre}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <TableUsers />
        </div>
      </div>
    </section>
  )
}

const BorrowRate = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        display: false // You can customize legend display here
      },
      filler: {
        backgroundColor: 'rgba(1, 16, 47, 0.1)' // Adjust opacity as needed
      }
    }
  };
  return (
    <div className="borrowrate">
      <Bar options={options} data={borrowRateThisWeek} backgroundColor="#01102f" />
    </div>
  );
};

const TotalGenre = () => {
  const chartRef = useRef(null);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        display: false,
      },
    },
    elements: {
      arc: {
        borderWidth: 0, // No border around pie slices
      },
    },
    layout: {
      padding: 0, // Remove internal padding for the chart
    },
    cutoutPercentage: 100,
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (chartRef.current) {
        chartRef.current.resize(); // Force the chart to resize
      }
    });

    const chartContainer = document.querySelector(".pie_container");
    if (chartContainer) {
      resizeObserver.observe(chartContainer);
    }

    return () => {
      if (chartContainer) resizeObserver.unobserve(chartContainer);
    };
  }, []);

  return (
    <div className="pie_container">
      <h1>{sum}</h1>
      <p>Books in Inventory</p>
      <div className="popular_genre_container">
        <Doughnut ref={chartRef} options={options} data={allBook} />
      </div>
    </div>
  );
};
 
const allBook = {
  labels: [
      "Computer Science",
      "Mathematics",
      "History",
      "Calculus",
      "Physics",
      "General Science",
      "Literature",
      "Economics",
      "Entrepreneurship",
      "Business Administration",
      "Natural Science",
      "Algebra",
      "Political Science"
  ],
  datasets: [
      {
          label: "All Books",
          data: dataList,
          backgroundColor: [
              "rgb(255, 99, 132)", // Computer Science
              "rgb(54, 162, 235)", // Mathematics
              "rgb(255, 205, 86)", // History
              "rgb(75, 192, 192)", // Calculus
              "rgb(153, 102, 255)", // Physics
              "rgb(255, 159, 64)", // General Science
              "rgb(201, 203, 207)", // Literature
              "rgb(255, 99, 71)", // Economics
              "rgb(144, 238, 144)", // Entrepreneurship
              "rgb(135, 206, 250)", // Business Administration
              "rgb(244, 164, 96)", // Natural Science
              "rgb(123, 104, 238)", // Algebra
              "rgb(60, 179, 113)", // Political Science
          ],
          hoverOffset: 4
      }
  ]
};


const TableUsers = () => {
  let userStats = [
    {
      userName: "Johnny Johnny",
      id: "69420021",
      status: "Borrowing",
      book_borrowed: "The Time of My Life",
      book_overdue: "",
      previous_book_borrowed: "Better than Black"
    },
    {
      userName: "Jane Doe",
      id: "69420022",
      status: "Returned",
      book_borrowed: "The Silent Patient",
      book_overdue: "3 Days",
      previous_book_borrowed: "The Girl on the Train"
    },
    {
      userName: "Mark Smith",
      id: "69420023",
      status: "Borrowing",
      book_borrowed: "The Catcher in the Rye",
      book_overdue: "",
      previous_book_borrowed: "1984"
    },
    {
      userName: "Alice Cooper",
      id: "69420024",
      status: "Returned",
      book_borrowed: "Pride and Prejudice",
      book_overdue: "1 Day",
      previous_book_borrowed: "Moby Dick"
    },
    {
      userName: "Bob Marley",
      id: "69420025",
      status: "Borrowing",
      book_borrowed: "The Hobbit",
      book_overdue: "",
      previous_book_borrowed: "The Great Gatsby"
    },
  ];

  return (
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
          </tr>
        </thead>
        <tbody>
          {userStats.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.id}</td>
              <td>{user.status}</td>
              <td>{user.book_borrowed}</td>
              <td>{user.book_overdue}</td>
              <td>{user.previous_book_borrowed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
