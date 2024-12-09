# Library Management App

### By: *Group 5* for *CCC121*

---

## How to Run Program

### Prerequisites

| Resource        | Use Case                                        | Version   |
|-----------------|-------------------------------------------------|-----------|
| IntelliJ        | Backend                                         | 17 - 23   |
| VS Code         | Frontend                                        | Latest    |
| Node.js         | Frontend API communication and VITE Development | v22.12    |
| MySQL Workbench | Database                                        | v8.3      |
| Postman         | API Testing                                     | Latest    |

---

### Backend Setup
1. **Clone the repository**  
   Open your terminal and run:
      ```bash
      git clone https://github.com/your-repo-url/library-management.git
      cd library-management

2. **Open the project in IntelliJ**
   -Ensure you are using the correct JDK version (17-23).

3. **Setup database**
   -Create a new schema with the name "books"

4. **Connetct Databse to Backend**
   Within the "application.properties" file located in `src/main/resources `, make sure to edit the password and username to your MySQL workbench setup
   ```spring set-up file
   spring.datasource.username=root
   spring.datasource.password=root@123

5. **Run API**
   -Execute the main application file (LibraryTestAppApplication.java).

---

### Frontend Setup

1. Install dependencies
   Navigate to the frontend folder and run in frontend terminal:
  ```bash
npm install
 ```

2. Start the development server
Use:
  ```bash
npm run dev
 ```

3. Access the frontend
Open your browser and go to:
```bash
http://localhost:5173
 ```

---

### Testing APIs

1. **Use Postman for testing**
   -Import the API collection from the postman folder.

4. **Test endpoints**
   - Ensure the backend server is running.</li>
   - Use Postman to send GET, POST, PUT, DELETE requests to the endpoints.</li>
