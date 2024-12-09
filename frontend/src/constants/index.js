//dummy database

export const borrowRateThisWeek = {
    labels: [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",

    ],
    datasets: [
        {
            label: "Borrowed Books 2024",
            data: [510, 110, 57, 513, 15, 170, 210, 120, 97, 85, 22, 701],
            borderColor: "rgb(75, 192, 192)"
        },
        {
            label: "Borrowed Books 2023",
            data: [0, 310, 54, 553, 17, 180, 240, 180, 105, 62, 201],
            borderColor: "rgb(75, 120, 192)"
        }

    ]
}

const dataList = [210, 13, 234, 456, 123, 78, 234, 123, 56, 128, 234, 463, 31];

export const sum = dataList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

export const popularGenre = {
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
            label: "Most Borrowed Genre",
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


export const bookTestDatabase = [
    {
        title: "The Wild Robot",
        author: "Jest Lester",
        genre: "Literature",
        bookid: 23424323,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Math Book",
        author: "Lorey Maraign",
        genre: "Math",
        bookid: 23424324,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Computer Science 101",
        author: "Coolard Lenard",
        genre: "Computer Science",
        bookid: 23424325,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Introduction to Physics",
        author: "Albert Feynman",
        genre: "Physics",
        bookid: 23424326,
        availablity: false,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Entrepreneurship Essentials",
        author: "Sophia Taylor",
        genre: "Entrepreneurship",
        bookid: 23424327,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Algebra for Beginners",
        author: "John Mathison",
        genre: "Algebra",
        bookid: 23424328,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "History of Civilizations",
        author: "Anna Harper",
        genre: "History",
        bookid: 23424329,
        availablity: false,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "General Science Basics",
        author: "Emily Newton",
        genre: "General Science",
        bookid: 23424330,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Principles of Economics",
        author: "David Keynes",
        genre: "Economics",
        bookid: 23424331,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Calculus Simplified",
        author: "Isaac Derivative",
        genre: "Calculus",
        bookid: 23424332,
        availablity: false,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Political Science Explained",
        author: "Harold Governance",
        genre: "Political Science",
        bookid: 23424333,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Business Administration Guide",
        author: "Oliver Management",
        genre: "Business Administration",
        bookid: 23424334,
        availablity: true,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Natural Science Wonders",
        author: "Clara Darwin",
        genre: "Natural Science",
        bookid: 23424335,
        availablity: false,
        publisher: "The book Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Advanced Data Structures",
        author: "Ronald Kincaid",
        genre: "Computer Science",
        bookid: 23424336,
        availablity: true,
        publisher: "Tech Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Quantum Physics Fundamentals",
        author: "Max Planck",
        genre: "Physics",
        bookid: 23424337,
        availablity: false,
        publisher: "Science Press",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Exploring Literature",
        author: "Jane Austen",
        genre: "Literature",
        bookid: 23424338,
        availablity: true,
        publisher: "Classic Publishers",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Principles of Microeconomics",
        author: "Gregory Mankiw",
        genre: "Economics",
        bookid: 23424339,
        availablity: true,
        publisher: "Business Books",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
    {
        title: "Strategic Management",
        author: "Michael Porter",
        genre: "Business Administration",
        bookid: 23424340,
        availablity: true,
        publisher: "Strategy Press",
        bookimg: "https://lh3.google.com/u/1/d/1zKIu8ZHl2cONDuwnLkn-L_HynfoyaXAC=w1877-h972-iv2",
    },
];

export const userStats = [
    {
      userName: "Johnny Johnny",
      id: "69420001",
      status: "Borrowing",
      book_borrowed: "The Time of My Life",
      book_overdue: "",
      previous_book_borrowed: "Better than Black",
      password: "randompassword1", // Example password
      key: "key69420001", // Unique key
    },
    {
      userName: "Jane Doe",
      id: "69420002",
      status: "Returned",
      book_borrowed: "The Silent Patient",
      book_overdue: "3 Days",
      previous_book_borrowed: "The Girl on the Train",
      password: "randompassword2",
      key: "key69420002",
    },
    {
      userName: "Mark Smith",
      id: "69420003",
      status: "Borrowing",
      book_borrowed: "The Catcher in the Rye",
      book_overdue: "",
      previous_book_borrowed: "1984",
      password: "randompassword3",
      key: "key69420003",
    },
    {
      userName: "Alice Cooper",
      id: "69420004",
      status: "Returned",
      book_borrowed: "Pride and Prejudice",
      book_overdue: "1 Day",
      previous_book_borrowed: "Moby Dick",
      password: "randompassword4",
      key: "key69420004",
    },
    {
      userName: "Bob Marley",
      id: "69420005",
      status: "Borrowing",
      book_borrowed: "The Hobbit",
      book_overdue: "",
      previous_book_borrowed: "The Great Gatsby",
      password: "randompassword5",
      key: "key69420005",
    },
    {
      userName: "Emily Brown",
      id: "69420006",
      status: "Returned",
      book_borrowed: "To Kill a Mockingbird",
      book_overdue: "2 Days",
      previous_book_borrowed: "War and Peace",
      password: "randompassword6",
      key: "key69420006",
    },
    {
      userName: "David Taylor",
      id: "69420007",
      status: "Borrowing",
      book_borrowed: "The Road",
      book_overdue: "",
      previous_book_borrowed: "Brave New World",
      password: "randompassword7",
      key: "key69420007",
    },
    {
      userName: "Sarah Wilson",
      id: "69420008",
      status: "Returned",
      book_borrowed: "The Alchemist",
      book_overdue: "5 Days",
      previous_book_borrowed: "The Book Thief",
      password: "randompassword8",
      key: "key69420008",
    },
    {
      userName: "Chris Clark",
      id: "69420009",
      status: "Borrowing",
      book_borrowed: "The Grapes of Wrath",
      book_overdue: "",
      previous_book_borrowed: "Of Mice and Men",
      password: "randompassword9",
      key: "key69420009",
    },
    {
      userName: "Jessica Martinez",
      id: "69420010",
      status: "Returned",
      book_borrowed: "The Kite Runner",
      book_overdue: "1 Week",
      previous_book_borrowed: "Life of Pi",
      password: "randompassword10",
      key: "key69420010",
    },
    {
      userName: "Michael Johnson",
      id: "69420011",
      status: "Borrowing",
      book_borrowed: "The Shining",
      book_overdue: "",
      previous_book_borrowed: "Pet Sematary",
      password: "randompassword11",
      key: "key69420011",
    },
    {
      userName: "Sophia Davis",
      id: "69420012",
      status: "Returned",
      book_borrowed: "Jane Eyre",
      book_overdue: "4 Days",
      previous_book_borrowed: "Wuthering Heights",
      password: "randompassword12",
      key: "key69420012",
    },
    {
      userName: "William Moore",
      id: "69420013",
      status: "Borrowing",
      book_borrowed: "The Odyssey",
      book_overdue: "",
      previous_book_borrowed: "Iliad",
      password: "randompassword13",
      key: "key69420013",
    },
    {
      userName: "Olivia Lee",
      id: "69420014",
      status: "Returned",
      book_borrowed: "Little Women",
      book_overdue: "2 Days",
      previous_book_borrowed: "Anne of Green Gables",
      password: "randompassword14",
      key: "key69420014",
    },
    {
      userName: "James Thompson",
      id: "69420015",
      status: "Borrowing",
      book_borrowed: "The Hunger Games",
      book_overdue: "",
      previous_book_borrowed: "Divergent",
      password: "randompassword15",
      key: "key69420015",
    },
    {
      userName: "Isabella White",
      id: "69420016",
      status: "Returned",
      book_borrowed: "A Tale of Two Cities",
      book_overdue: "3 Days",
      previous_book_borrowed: "Great Expectations",
      password: "randompassword16",
      key: "key69420016",
    },
  ];
  