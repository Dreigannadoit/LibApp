import "../css/dashboard.css";
import Header from '../components/Header';
import Status from '../components/status';
import React, { useEffect, useRef, useState } from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarController, BarElement } from "chart.js";
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { borrowRateThisWeek, popularGenre, sum } from "../constants";
import { avatar, borrow, borrowedBooks, overdue } from "../assets/icons";

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
  const [statusData, setStatusData] = useState({
    totalBooksAvailable: 120, // Example data
    borrowedBooksThisWeek: 45, // Example data
    totalOverdueBooks: 10, // Example data
    registeredMembers: 230, // Example data
  });

  return (

    <section className='dashoard'>

      <Header current_page="Dashboard" setIsAuthenticated={setIsAuthenticated} />

      <div className="content">
        <div className="content_container">
          <div className="hero">
            <div className="status_blocks">
              <Status title="Total Books Available" status={statusData.totalBooksAvailable} imgurl={borrowedBooks} />
              <Status title="Borrowed Books" status={statusData.borrowedBooksThisWeek} imgurl={borrow} />
              <Status title="Overdue" status={statusData.totalOverdueBooks} imgurl={overdue} />
              <Status title="Members" status={statusData.registeredMembers} imgurl={avatar} />
            </div>

          </div>

          <div className="graphs">
            <BorrowRate />
            <TotalGenre />
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
      <Bar options={options} data={borrowRateThisWeek} backgroundColor="#01102f"/>
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
        <Doughnut ref={chartRef} options={options} data={popularGenre} />
      </div>
    </div>
  );
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
